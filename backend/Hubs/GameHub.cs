using Microsoft.AspNetCore.SignalR;
using T_rex.Backend.Managers;
using T_rex.Backend.Models;
using T_rex.Backend.Models.Dto;

namespace T_rex.Backend.Hubs;
public class GameHub : Hub
{
    public GameHub(GameManager gameHelper)
    {
        _gameHelper = gameHelper;
    }

    private readonly GameManager _gameHelper;

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        _gameHelper.Init(Context);

        _gameHelper.LeaveGame();
        await Clients.All.SendAsync("playerLeft", _gameHelper.Player.Id);

        await base.OnDisconnectedAsync(exception);
    }

    public async Task CreateGame()
    {
        _gameHelper.Init(Context);
        
        Game game = _gameHelper.CreateGame();
        await Clients.Caller.SendAsync("gameCreated", new GameCreated(game.Id, game.Master.Id, game.Master.Nickname));
    }

    public async Task JoinGame(Guid gameId)
    {
        _gameHelper.Init(Context);
        
        _gameHelper.JoinGame(gameId);
        await Clients.Caller.SendAsync("joined", new Joined(_gameHelper.PlayerId, _gameHelper.Game!.Players.ToDictionary(p => p.Id, p => new JoinedPlayer(p.Nickname))));
        await Clients.Others.SendAsync("playerJoined", new Models.Dto.Player(_gameHelper.Player.Id, _gameHelper.Player.Nickname));
    }

    public async Task LeaveGame()
    {
        _gameHelper.Init(Context);
        
        _gameHelper.LeaveGame();
        await Clients.All.SendAsync("playerLeft", _gameHelper.Player.Id);
    }

    public async Task SetNickname(string nickname)
    {
        _gameHelper.Init(Context);
        
        _gameHelper.Rename(nickname);
        await Clients.All.SendAsync("playerRenamed", new Models.Dto.Player(_gameHelper.Player.Id, _gameHelper.Player.Nickname) );
    }
    
    public async Task SendDirection(string direction)
    {
        string playerId = Context.ConnectionId;
        await Clients.All.SendAsync("ReceiveMessage", direction, playerId);
    }
}