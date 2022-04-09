using Microsoft.AspNetCore.SignalR;
using T_rex.Backend.Models;

namespace T_rex.Backend.Hubs;

public class GameHub : Hub
{
    List<Player> ListOfPlayers = new();
    public Task Echo(string message)
    {
        return Clients.Caller.SendAsync("echo", message);
    }

    public Task SendDirection(string direction){
        
        string PlayerID = Context.ConnectionId;
        return Clients.All.SendAsync("ReceiveMessage", direction, PlayerID);

    }
    public void JoinLobby(string nickname)
    {
        ListOfPlayers.Add(newPlayer(nickname, Context.ConnectionId));
    }    
    public Player newPlayer(string nickname, string playerId)
    {
        var player = new Player(nickname, playerId);
        return player;
    }

    public Boolean startGame(Boolean start){

        return start;
    }

}