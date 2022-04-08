using T_rex.Backend.GameLogic.Player;
namespace T_rex.Backend.GameLogic;

public class Game
{
    public Game(List<Player> players)
    {
        this.Players = players;
        this.LobbyId = Guid.NewGuid();
    }
    public List<Player> Players { get; set; }
    public Guid LobbyId { get; set; }
}