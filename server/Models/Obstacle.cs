namespace Trex.Models;
public class Obstacle
{
    public Obstacle(int x, int y, ObstacleType type)
    {
        Id = Guid.NewGuid();
        Position = new Position(x, y);
        Type = type;
    }

    public Guid Id { get; }
    public ObstacleType Type { get; }

    public Position Position { get; set; }
    public Velocity Velocity { get; set; }

    public class ObstacleType
    {
        private ObstacleType(string name, int height, int collisionRadius)
        {
            Name = name;
            Height = height;
            CollisionRadius = collisionRadius;
        }

        public string Name { get; }
        public int Height { get; }
        public int CollisionRadius { get; }

        public static ObstacleType Small0 = new ObstacleType("small_0", 12, 4);
        public static ObstacleType Small1 = new ObstacleType("small_1", 8, 8);
        public static ObstacleType Small2 = new ObstacleType("small_2", 5, 12);
        public static ObstacleType Big0 = new ObstacleType("big_0", 16, 7);
        public static ObstacleType Big1 = new ObstacleType("big_1", 13, 12);
        public static ObstacleType Big2 = new ObstacleType("big_2", 12, 14);
        public static ObstacleType Bird1 = new ObstacleType("Bird_1", 60, 10);
        public static ObstacleType Bird2 = new ObstacleType("Bird_2", 40, 10);
        public static ObstacleType Bird3 = new ObstacleType("Bird_3", 20, 10);

        public static ObstacleType[] All => new ObstacleType[]
        {
            Small0,
            Small1,
            Small2,
            Big0,
            Big1,
            Big2,
            Bird1,
            Bird2,
            Bird3,
        };
        public static ObstacleType GetRandom()
        {
            return All[Random.Shared.Next(All.Length)];
        }
    }
}