

using T_rex.Backend.Database;
using T_rex.Backend.Database.Entities;

namespace T_rex.Backend.Managers;

public class HallOfFameManager
{
    public HallOfFameManager(DB db)
    {
        _db = db;
    }
    private readonly DB _db;

    public void Add(string name, int score)
    {
        _db.Results.Add(new Result { Nickname = name, Score = score , CreatedAt = DateTime.UtcNow, Id = Guid.NewGuid()});
        _db.SaveChanges();
    }
    public Result[] GetTop(int count)
    {
        return _db.Results.OrderByDescending(r => r.Score).Take(count).ToArray();
    }
}