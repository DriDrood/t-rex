using Microsoft.AspNetCore.Mvc;
using trex.Models.Dto.Lobby;
using Trex.Models;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class LobbyController : Controller
{
    public static Dictionary<Guid, Lobby> Lobbies = new Dictionary<Guid, Lobby>();

    [HttpPost("[action]")]
    public CreateOut Create(CreateIn param)
    {
        Player player = new Player(param.Nickname);
        Lobby lobby = new Lobby(player);
        Lobbies.Add(lobby.Id, lobby);

        return new CreateOut
        {
            LobbyId = lobby.Id,
            PlayerId = player.Id,
        };
    }

    [HttpPost("[action]")]
    public ActionResult<JoinOut> Join(JoinIn param)
    {
        if (!Lobbies.TryGetValue(param.LobbyId, out Lobby lobby))
            return BadRequest("Wrong lobbyId");

        if (lobby.Players.Any(p => p.Nickname == param.Nickname))
            return BadRequest("Player name is already taken");

        Player player = new Player(param.Nickname);
        lobby.AddPlayer(player);

        return Ok(new JoinOut
        {
            PlayerId = player.Id,
            Players = lobby.Players.ToDictionary(
                    p => p.Id,
                    p => new JoinOutPlayer
                    {
                        Nickname = p.Nickname,
                        IsMaster = lobby.Master.Id == p.Id
                    }),
        });
    }

    [HttpGet("[action]")]
    public void Delete(Guid lobbyId)
    {
        Lobbies.Remove(lobbyId);// Delete lobby
    }
}
