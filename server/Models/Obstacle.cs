namespace T_rex.Backend.Models;
public class Obstacle
{
    public enum EObstacleType
    {
        small_0,
        small_1,
        small_2,
        big_0,
        big_1,
        big_2,
        bird
    }
    public Obstacle(int x, int y, int width, EObstacleType type)
    {
        Id = Guid.NewGuid();
        X = x;
        Y = y;
        Width = width;
        Type = type;
    }

    public Guid Id { get; }
    public int X { get; }
    public int Y { get; }
    public int Width { get; }
    public EObstacleType Type { get; }
}