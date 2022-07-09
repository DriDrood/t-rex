using Microsoft.AspNetCore.SignalR;
using trex.Models;
using trex.Models.Dto;

namespace trex.Hubs;

public class GameHub : Hub
{
    
    private static int x = 50;
    private static int y = 50;

    public Task KeyPressed(KeysIn keys)
    {
        if (keys.Down)
            y -= 5;
        if (keys.Up)
            y += 5;
        if (keys.Left)
            x -= 5;
        if (keys.Right)
            x += 5;

        return Clients.Caller.SendAsync("position", new { x, y });
    }

    public async Task JoinGame(string gameId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
    }
}