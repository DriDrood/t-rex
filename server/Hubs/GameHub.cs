using Microsoft.AspNetCore.SignalR;
using trex.Controllers;
using trex.Models.Dto.Game;
using Trex.Models;

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

    public async Task JoinGame(Guid lobbyId, Guid playerId)
    {
        if (!LobbyController.Lobbies.TryGetValue(lobbyId, out Lobby lobby))
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Message = "Invalid lobbyId" });
            return;
        }

        Player player = lobby.Players.FirstOrDefault(p => p.Id == playerId);
        if (player == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Message = "Invalid playerId" });
            return;
        }

        player.ConnectionId = Context.ConnectionId;
        await Groups.AddToGroupAsync(Context.ConnectionId, lobby.Id.ToString());
    }
}