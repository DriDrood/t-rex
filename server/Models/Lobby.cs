namespace Trex.Models;
public class Lobby
{
    public Guid Id { get; set; }
    public Player Master { get; set; }
    public List<Player> Players { get; set; }

    public Lobby(Player player)
    {
        Id = Guid.NewGuid();
        Master = player;
        Players = new List<Player>();
        Players.Add(player);
    }

    public void AddPlayer(Player player)
    {
        Players.Add(player);// Add player to lobby
    }

    public void DeletePlayer(Player player)
    {
        Players.Remove(player);

        // empty
        if (!Players.Any())
        {
            trex.Controllers.LobbyController.Lobbies.Remove(Id);
            // log: Lobby ends
            return;
        }

        if (Master.Id == player.Id)
        {
            Master = Players.First();
        }
    }
}