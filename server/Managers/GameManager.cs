using Microsoft.AspNetCore.SignalR;
using Trex.Models;

namespace Trex.Managers;
public class GameManager
{
    public GameManager(IHubCallerClients clients, Lobby lobby)
    {
        _clients = clients.Group(lobby.Id.ToString());
        Map = new Map(lobby.Players);
    }

    private readonly IClientProxy _clients;
    public Map Map;
    public bool IsRunning => Map.Players.Any(p => p.Score == 0);

    public async void Start()
    {
        await _clients.SendAsync("gameStarted");
        while (IsRunning)
        {
            await Task.Delay(20);
            Task _ = Task.Run(Tick);
        }
    }

    public async Task Tick()
    {
        await _clients.SendAsync("tick", new { });
    }

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