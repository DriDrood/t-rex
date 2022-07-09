

using Microsoft.AspNetCore.Mvc;
using trex.Database;

namespace trex.Controllers;


public class HallOfFameController
{
    static List<PlayerResult> hallOfFame = new List<PlayerResult>();
    
    public void AddResult(PlayerResult result)
    {
        hallOfFame.Add(result);
    }
    
    public List<PlayerResult> GetTop(int count)
    {
        return hallOfFame.OrderByDescending(r => r.Score).Take(count).ToList();
    }
}
