using Trex.Models;

namespace Trex.Managers;
public class GameManager
{
    public GameManager(Lobby lobby)
    {
        _lobby = lobby;
        Map = new Map(_lobby.Players);
    }

    public Map Map;
    private Lobby _lobby;


    public void MoveObstacles(int numberOfTicks)
    {
        int speed = 5;
        const int maxSpeed = 13;

        foreach (Obstacle obstacle in Map.Obstacles)
        {
            obstacle.X -= speed;
            if (speed < maxSpeed) speed += 1;
        }
    }
    public void AddObstacle()
    {
        int x = Map.Obstacles.Last().X + Random.Shared.Next(150, 600);
        int y = 0;
        Map.Obstacles.Add(new Obstacle(x, y, Obstacle.ObstacleType.GetRandom()));
    }
}