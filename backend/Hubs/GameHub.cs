using Microsoft.AspNetCore.SignalR;
using T_rex.Backend.Managers;
using T_rex.Backend.Models;

namespace T_rex.Backend.Hubs;
public class GameHub : Hub
{
    public GameHub(GameManager userHelper)
    {
        _userHelper = userHelper;
        _userHelper.Init(Context);
    }

    private readonly GameManager _userHelper;

    public async Task CreateGame()
    {
        Game game = _userHelper.CreateGame();
        await Clients.Caller.SendAsync("gameCreated", game.Id);
    }

    public async Task JoinGame(Guid gameId)
    {
        _userHelper.JoinGame(gameId);
        await Clients.Caller.SendAsync("joined", _userHelper.Game!.Players);
        await Clients.Others.SendAsync("playerJoined", _userHelper.Player);
    }

    public async Task LeaveGame()
    {
        _userHelper.LeaveGame();
        await Clients.All.SendAsync("playerLeft", _userHelper.Player);
    }

    public async Task SetNickname(string nickname)
    {
        _userHelper.Rename(nickname);
        await Clients.All.SendAsync("playerRenamed", _userHelper.Player);
    }
    
    public async Task SendDirection(string direction)
    {    
        string playerId = Context.ConnectionId;
        await Clients.All.SendAsync("ReceiveMessage", direction, playerId);
    }
}