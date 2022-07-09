namespace trex.Models;
public class Lobby
{
    public Guid Id { get; set; }
    public List<Player> Players { get; set; }
    public Lobby(Player player)
    {
        Id = Guid.NewGuid();
        Players = new List<Player>();
        Players.Add(player);
    }

    public void AddPlayer(Player player)
    {
        Players.Add(player);// Add player to lobby
    }
}