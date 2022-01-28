namespace T_rex.Backend.Utils.WS;

public class Manager
{
    public Manager()
    {
        _connections = new Dictionary<Guid, Connection>();
    }

    private readonly Dictionary<Guid, Connection> _connections;
    /// <summary>
    ///   Returns task loop or null for non-webSocket
    /// </summary>
    public async Task<Task?> TryConnectWS(HttpContext httpContext)
    {
        if (httpContext.WebSockets.IsWebSocketRequest)
        {
            var webSocket = await httpContext.WebSockets.AcceptWebSocketAsync();
            var connection = new Connection(webSocket);

            _connections.Add(connection.ConnectionId, connection);
            connection.OnMessage = Echo;

            return connection.WaitingLoop;
        }

        return null;
    }

    public Task Echo(Connection connection, string message)
    {
        return connection.SendMessage("echo", message);
    }
}
