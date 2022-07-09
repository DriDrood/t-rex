namespace T_rex.Models;
public class Obstacle
{
    public Obstacle(int x, int y, ObstacleType type)
    {
        Id = Guid.NewGuid();
        X = x;
        Y = y;
        Type = type;
    }

    public Guid Id { get; }
    public int X { get; }
    public int Y { get; }
    public ObstacleType Type { get; }

    public class ObstacleType
    {
        private ObstacleType(string name, int width, int collisionRadius)
        {
            Name = name;
            Width = width;
            CollisionRadius = collisionRadius;
        }

        public string Name { get; }
        public int Width { get; }
        public int CollisionRadius { get; }

        public static ObstacleType Small0 => new ObstacleType("small_0", 20, 20);
        // public static ObstacleType Small1 => new ObstacleType(30);
        // public static ObstacleType Small2 => new ObstacleType(50);
        // public static ObstacleType Big0 => new ObstacleType(100);
        // public static ObstacleType Big1 => new ObstacleType(100);
        // public static ObstacleType Big2 => new ObstacleType(100);
        // public static ObstacleType Bird => new ObstacleType(100);
    }
}