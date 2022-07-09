using Microsoft.AspNetCore.Mvc;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class LobbyController : Controller
{
    public LobbyController()
    {
    }
    [HttpPost("[action]")]
    public Guid Create(string playerName)
    {

        Guid lobbyId = Guid.NewGuid();
        return lobbyId;// Create lobby
    }
    [HttpPost("[action]")]
    public void Join(Guid lobbyId, string playerName)
    {

    }
}
