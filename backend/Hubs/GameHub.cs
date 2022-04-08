using Microsoft.AspNetCore.SignalR;

namespace T_rex.Backend.Hubs;

public class GameHub : Hub
{
    public Task Echo(string message)
    {
        return Clients.Caller.SendAsync("echo", message);
    }

    public Task SendDirection(string direction){
        
        string PlayerID = Context.ConnectionId;
        return Clients.All.SendAsync("ReceiveMessage", direction, PlayerID);

    }
}