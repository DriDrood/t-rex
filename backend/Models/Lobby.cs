namespace trex.Models;
public class Lobby
{
    public Guid id { get; set; }
    public List<Player> players { get; set; }
    public Lobby(Player player)
    {
        id = Guid.NewGuid();
        players = new List<Player>();
        players.Add(player);
    }

    public void AddPlayer(Player player)
    {
        players.Add(player);// Add player to lobby
    }
}