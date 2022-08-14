using Microsoft.AspNetCore.SignalR;
using trex.Controllers;
using trex.Models.Dto.Game;
using Trex.Managers;
using Trex.Models;

namespace trex.Hubs;

public class GameHub : Hub
{
    private static Dictionary<string, GameManager> _games = new();

    public override Task OnDisconnectedAsync(Exception exception)
    {
        return LeaveGame();
    }

    public async Task KeyPressed(KeysIn keys)
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.ConnectionId == Context.ConnectionId));
        if (lobby == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "noLobby", Message = "Invalid lobbyId" });
            return;
        }

        Player player = lobby.Players.FirstOrDefault(p => p.ConnectionId == Context.ConnectionId);
        if (player == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "notConnected", Message = "You are not connected" });
            return;
        }

        player.KeyDownPressed = keys.Down;
        player.KeyUpPressed = keys.Up;
        player.KeyLeftPressed = keys.Left;
        player.KeyRightPressed = keys.Right;
    }

    public async Task JoinGame(Guid playerId)
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.Id == playerId));
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
        await Clients.Group(lobby.Id.ToString()).SendAsync("playerJoined", new PlayerJoinedOut { Nickname = player.Nickname });
        await Groups.AddToGroupAsync(Context.ConnectionId, lobby.Id.ToString());
    }

    public async Task LeaveGame()
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.ConnectionId == Context.ConnectionId));
        if (lobby == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "noLobby", Message = "Invalid lobbyId" });
            return;
        }

        Player player = lobby.Players.FirstOrDefault(p => p.ConnectionId == Context.ConnectionId);
        if (player == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "notConnected", Message = "You are not connected" });
            return;
        }

        lobby.DeletePlayer(player);
        await Clients.Group(lobby.Id.ToString()).SendAsync("playerLeft", new PlayerJoinedOut { Nickname = player.Nickname });
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, lobby.Id.ToString());
    }

    public async Task KickPlayer(string nickname)
    {
        Lobby lobby = LobbyController.Lobbies.Values.FirstOrDefault(l => l.Players.Any(p => p.ConnectionId == Context.ConnectionId));
        if (lobby == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "noLobby", Message = "Invalid lobbyId" });
            return;
        }
        
        Player me = lobby.Players.FirstOrDefault(p => p.ConnectionId == Context.ConnectionId);
        if (me == null || lobby.Master != me)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "notMaster", Message = "You has to be master to kick player" });
            return;
        }

        Player player = lobby.Players.FirstOrDefault(p => p.Nickname == nickname);
        if (player == null)
        {
            await Clients.Caller.SendAsync("error", new ErrorOut { Code = "notConnected", Message = "Player is not connected" });
            return;
        }

        lobby.DeletePlayer(player);
        await Clients.Group(lobby.Id.ToString()).SendAsync("playerLeft", new PlayerJoinedOut { Nickname = player.Nickname });
        await Groups.RemoveFromGroupAsync(player.ConnectionId, lobby.Id.ToString());
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