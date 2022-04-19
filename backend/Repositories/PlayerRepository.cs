using T_rex.Backend.Models;

namespace T_rex.Backend.Repositories;
public class PlayerRepository
{
    public PlayerRepository()
    {
        _playerMap = new();
    }

    private readonly Dictionary<string, Player> _playerMap;

    public Player GetOrCreate(string playerId)
    {
        if (_playerMap.TryGetValue(playerId, out Player? player))
            return player;

        string randomNickname = $"{ADJECTIVES.RandomItem()} {NOUNS.RandomItem()}";
        Player newPlayer = new Player(playerId, randomNickname);
        _playerMap[playerId] = newPlayer;

        return newPlayer;
    }

    public void Rename(Player player, string newNickname)
    {
        player.Nickname = newNickname;
    }

    private static readonly string[] NOUNS = new string[] { "elephant", "charlady", "ladybug", "octocat", "Kevin" };
    private static readonly string[] ADJECTIVES = new string[] { "smart", "dummy", "pritty", "green", "global" };
}