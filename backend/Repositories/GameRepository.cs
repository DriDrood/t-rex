using T_rex.Backend.Models;

namespace T_rex.Backend.Repositories;
public class GameRepository
{
    public GameRepository()
    {
        _connectionMap = new();
        _gameMap = new();
    }

    private readonly Dictionary<string, Guid> _connectionMap;
    private readonly Dictionary<Guid, Game> _gameMap;

    public Game Create(Player master)
    {
        Game newGame = new(master);
        _gameMap[newGame.Id] = newGame;
        return newGame;
    }

    public Game? Get(Guid id)
    {
        _gameMap.TryGetValue(id, out Game? game);
        return game;
    }

    public void Destroy(Game game)
    {
        foreach (Player player in game.Players)
        {
            player.Game = null;
        }
        
        _gameMap.Remove(game.Id);
    }
}