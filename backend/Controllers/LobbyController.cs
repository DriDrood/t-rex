using Microsoft.AspNetCore.Mvc;
using trex.Models;
namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class LobbyController : Controller
{
    public static Dictionary<Guid, Lobby> lobbies = new Dictionary<Guid, Lobby>();
    public LobbyController()
    {
    }
    [HttpPost("[action]")]
    public Guid Create(string playerName)
    {
        Lobby lobby = new Lobby(new Player(playerName));
        lobbies.Add(lobby.id, lobby);
        return lobby.id;// Create lobby
    }
    [HttpPost("[action]")]
    public void Join(Guid lobbyId, string playerName)
    {
        lobbies[lobbyId].AddPlayer(new Player(playerName));// Add player to lobby
    }
}
