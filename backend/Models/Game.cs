namespace T_rex.Backend.Models;
public class Game
{
    public Game(Player master)
    {
        Id = Guid.NewGuid();
        Master = master;
        Players = new();

        Players.Add(master);
    }

    public Guid Id { get; }
    public Player Master { get; set; }
    public HashSet<Player> Players { get; }
}
