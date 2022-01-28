using System.Net.WebSockets;
using System.Text;
using System.Text.Json;

namespace T_rex.Backend.Utils.WS;

public class Connection
{
    private const int BUFFER_SIZE = 4096;

    public Connection(WebSocket webSocket, Guid? connectionId = null)
    {
        ConnectionId = connectionId ?? Guid.NewGuid();
        WaitingLoop = _receiveLoop();
        _webSocket = webSocket;
    }

    public Guid ConnectionId { get; }
    public Task WaitingLoop { get; }
    public Func<Connection, string, Task>? OnMessage { get; set; }
    public Func<Connection, string, Task>? OnDisconnect { get; set; }

    private WebSocket _webSocket;

    public async Task SendMessage(string method, object data)
    {
        // create message
        object message = new { method = method, @param = data };
        string messageString = JsonSerializer.Serialize(message);
        byte[] messageBytes = Encoding.UTF8.GetBytes(messageString);

        // // log
        // Logger.Logger.Log(ELogLevel.MessageSend, PlayerId, messageString);

        // split & send
        try
        {
            while (messageBytes.Length > 0)
            {
                byte[] buffer = messageBytes.Take(BUFFER_SIZE).ToArray();
                await _webSocket.SendAsync(buffer, WebSocketMessageType.Text, messageBytes.Length < BUFFER_SIZE, CancellationToken.None);

                messageBytes = messageBytes.Skip(BUFFER_SIZE).ToArray();
            }
        }
        catch (WebSocketException ex)
        {
            // Logger.Logger.Log(ELogLevel.UnknownException, PlayerId, ex.Message, ex.StackTrace);
        }
    }

    public async Task Disconnect(string reason)
    {
        try
        {
            await _webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, reason, CancellationToken.None);
        }
        catch (WebSocketException)
        {
            _webSocket.Abort();
        }

        await _onDisconnected(reason);
    }

    private Task _receiveLoop()
    {
        return Task.Run(async () =>
        {
            byte[] buffer = new byte[BUFFER_SIZE];
            WebSocketReceiveResult result;
            try
            {
                // wait for messages
                do
                {
                    // read single message
                    StringBuilder message = new StringBuilder();
                    do
                    {
                        result = await _webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                        string messagePart = Encoding.UTF8.GetString(buffer.Take(result.Count).ToArray());
                        message.Append(messagePart);
                    }
                    while (!result.EndOfMessage);

                    // ignore closing
                    if (result.CloseStatus is null && OnMessage is not null)
                        await OnMessage(this, message.ToString());
                }
                while (result.CloseStatus is null);

                await _onDisconnected(result.CloseStatusDescription ?? "Regular connection closing");
            }
            catch (WebSocketException ex)
            {
                await _onDisconnected(ex.Message);
            }
        });
    }

    private async Task _onDisconnected(string reason)
    {
        if (OnDisconnect is not null)
            await OnDisconnect(this, reason);
    }
}