using T_rex.Backend.Models;

namespace T_rex.Backend.Repositories;
public class GameRepository
{
    public GameRepository(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
        _gameMap = new();
    }

    private readonly IServiceProvider _serviceProvider;
    private readonly Dictionary<Guid, Game> _gameMap;

    public Game Create(Player master)
    {
        ConnectionRepository connectionRepository = _serviceProvider.Get<ConnectionRepository>();

        Game newGame = new(master);
        _gameMap[newGame.Id] = newGame;

        connectionRepository.Join(master, newGame);
        
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