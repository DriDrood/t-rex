using T_rex.Backend.Models;

namespace T_rex.Backend.Repositories;
public class ConnectionRepository
{
    public ConnectionRepository(GameRepository gameRepository, PlayerRepository playerRepository)
    {
        _gameRepository = gameRepository;
        _playerRepository = playerRepository;
    }

    private readonly GameRepository _gameRepository;
    private readonly PlayerRepository _playerRepository;
    
    public void Join(Player player, Guid gameId)
    {
        Game game = _gameRepository.Get(gameId)
            ?? throw new Exception("Game not found");

        Join(player, game);
    }
    public void Join(Player player, Game game)
    {
        game.Players.Add(player);
        player.Game = game;
    }

    public void Leave(Player player)
    {
        Game? game = player.Game;

        // player has no game
        if (game is null)
            return;

        game.Players.Remove(player);
        player.Game = null;

        // no other player in game - destroy game
        if (!game.Players.Any())
        {
            _gameRepository.Destroy(game);
            return;
        }
        
        // player is master -> set any other player as master
        if (game.Master == player)
            game.Master = game.Players.First();
    }
}