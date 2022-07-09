namespace Trex.Models;

public class Map
{
    public Map(HashSet<Player> players)
    {
        Obstacles = new List<Obstacle>();
        Players = Players;
    }
    public List<Obstacle> Obstacles { get; }
    public HashSet<Player> Players { get; }
}