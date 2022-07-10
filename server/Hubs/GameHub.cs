using Microsoft.AspNetCore.SignalR;
using trex.Controllers;
using trex.Models.Dto.Game;
using Trex.Managers;
using Trex.Models;

namespace trex.Hubs;

public class GameHub : Hub
{
    private static Dictionary<string, GameManager> _games = new();
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

    public async Task JoinGame(Guid playerId)
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.ConnectionId == Context.ConnectionId));
        if (lobby == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "noLobby", Message = "Invalid lobbyId" });
            return;
        }

        Player player = lobby.Players.FirstOrDefault(p => p.Id == playerId);
        if (player == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "invalidPlayerId", Message = "Invalid playerId" });
            return;
        }

        player.ConnectionId = Context.ConnectionId;
        await Clients.Group(lobby.Id.ToString()).SendAsync("playerJoined", new PlayerJoinedOut { Nickname = player.name });
        await Groups.AddToGroupAsync(Context.ConnectionId, lobby.Id.ToString());
    }

    public async Task StartGame()
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.ConnectionId == Context.ConnectionId));
        if (lobby == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "noLobby", Message = "You are not in a lobby" });
            return;
        }

        Player player = lobby.Players.First(p => p.ConnectionId == Context.ConnectionId);
        if (lobby.Master != player)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "notMaster", Message = "You are not a lobby master" });
            return;
        }

        GameManager gameManager = new(Clients, lobby);
        _games.Add(lobby.Id.ToString(), gameManager);
        gameManager.Start();
    }
}