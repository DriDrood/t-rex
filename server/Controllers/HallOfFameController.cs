

using Microsoft.AspNetCore.Mvc;
using trex.Database;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class HallOfFameController : Controller
{
    static List<PlayerResult> hallOfFame = new List<PlayerResult>();
    [HttpPost("[action]")]
    public void AddResult(PlayerResult result)
    {
        hallOfFame.Add(result);
    }
    [HttpGet("[action]")]
    public List<PlayerResult> GetTop(int count)
    {
        return hallOfFame.OrderByDescending(r => r.Score).Take(count).ToList();
    }
}
