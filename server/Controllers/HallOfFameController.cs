using Microsoft.AspNetCore.Mvc;
using trex.Database;
using trex.Models.Dto.HallOfFame;

namespace trex.Controllers;
[ApiController]
[Route("api/[controller]")]
public class HallOfFameController : Controller
{
    public HallOfFameController(DB db)
    {
        _db = db;
    }

    private readonly DB _db;

    [HttpPost("[action]")]
    public void Add(AddIn result)
    {
        PlayerResult playerResult = new PlayerResult
        {
            Id = Guid.NewGuid(),
            Nickname = result.Nickname,
            Score = result.Score,
            CreatedAt = DateTime.UtcNow
        };
        _db.PlayerResults.Add(playerResult);
        _db.SaveChanges();
    }

    [HttpGet("[action]")]
    public PlayerResult[] GetTop(int count = 5)
    {
        return _db.PlayerResults
            .OrderByDescending(r => r.Score)
            .Take(count)
            .ToArray();
    }
}
