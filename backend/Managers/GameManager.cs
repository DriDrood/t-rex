using Microsoft.AspNetCore.SignalR;
using T_rex.Backend.Repositories;
using T_rex.Backend.Models;

namespace T_rex.Backend.Managers;
public class GameManager
{
    public GameManager(ConnectionRepository connectionRepository, GameRepository gameRepository, PlayerRepository playerRepository)
    {
        _connectionRepository = connectionRepository;
        _gameRepository = gameRepository;
        _playerRepository = playerRepository;
    }

    private readonly ConnectionRepository _connectionRepository;
    private readonly GameRepository _gameRepository;
    private readonly PlayerRepository _playerRepository;
    private HubCallerContext? _hubContext;
    private HubCallerContext HubContext => _hubContext ?? throw new Exception("Missing HubCallerContext, call GameHelper.Init before any other call");

    public Game? Game => Player.Game;
    public string PlayerId => HubContext.ConnectionId;
    public Player Player => _playerRepository.GetOrCreate(PlayerId);

    public void Init(HubCallerContext hubContext)
    {
        _hubContext = hubContext;
    }

    public Game CreateGame()
    {
        return _gameRepository.Create(Player);
    }

    public void JoinGame(Guid gameId)
    {
        _connectionRepository.Join(Player, gameId);
    }

    public void LeaveGame()
    {
        _connectionRepository.Leave(Player);
    }

    public void Rename(string newNickname)
    {
        _playerRepository.Rename(Player, newNickname);
    }
}