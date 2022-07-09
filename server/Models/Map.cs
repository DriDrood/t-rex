namespace Trex.Models;

public class Map
{
    public Map(IEnumerable<Player> players)
    {
        Obstacles = new List<Obstacle>();
        Players = new HashSet<Player>(players);
    }
    public List<Obstacle> Obstacles { get; }
    public HashSet<Player> Players { get; }
}