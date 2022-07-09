using Microsoft.AspNetCore.Mvc;
using trex.Models.Dto.Lobby;
using Trex.Models;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class LobbyController : Controller
{
    public static Dictionary<Guid, Lobby> lobbies = new Dictionary<Guid, Lobby>();

    [HttpPost("[action]")]
    public CreateOut Create(CreateIn param)
    {
        Player player = new Player(param.PlayerName);
        Lobby lobby = new Lobby(player);
        lobbies.Add(lobby.Id, lobby);

        return new CreateOut
        {
            LobbyId = lobby.Id,
            PlayerId = player.Id,
        };
    }

    [HttpPost("[action]")]
    public void Join(Guid lobbyId, string playerName)
    {
        lobbies[lobbyId].AddPlayer(new Player(playerName));// Add player to lobby
    }
    
    [HttpGet("[action]")]
    public void Delete(Guid lobbyId)
    {
        lobbies.Remove(lobbyId);// Delete lobby
    }
}
