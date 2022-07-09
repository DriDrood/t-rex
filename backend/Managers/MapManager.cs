using T_rex.Backend.Models;
using T_rex.Backend.Repositories;


namespace T_rex.Backend.Managers;
public class MapManager
{
    public MapManager(ConnectionRepository connectionRepository)
    {
        _connectionRepository = connectionRepository;
        // _map = new Map(_connectionRepository.game.Players);
    }

    private readonly ConnectionRepository _connectionRepository;
    private Map _map;
    public void SpawnObstackles(int speed = 1)
    {
        int minGap = 200;
        int maxGap = minGap * 2;
        Obstacle.EObstacleType obstacleType = (Obstacle.EObstacleType)Random.Range(0, 6);
        Obstacle obs = new Obstacle(0, 100, obstacleType);
    }
    public void GetMap()
    {
        // Send map to frontend
    }

    public void HandleInput(bool up, bool down, bool left, bool right)
    {
        // Handle input from frontend
    }

    public void GetPosition()
    {
        // Send position to frontend
    }
    // public async Task NewTick()
    // {

    // }
}