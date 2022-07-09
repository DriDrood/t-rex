

using Microsoft.AspNetCore.Mvc;
using trex.Database;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class HallOfFameController : Controller
{
    DB _db;
    public HallOfFameController(DB db)
    {
        _db = db;
    }

    [HttpPost("[action]")]
    public void AddResult(PlayerResult result)
    {
        _db.Add(result);
        _db.SaveChanges();
    }
    [HttpGet("[action]")]
    public List<PlayerResult> GetTop(int count)
    {
        return _db.PlayerResults.OrderByDescending(r => r.Score).Take(count).ToList();
    }
}
