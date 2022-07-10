namespace trex.Models.Dto.Game;
public class Tick
{
    public Dictionary<Guid, TickPlayerPosition> PlayerPositions { get; set; }
    public TickObstaclePosition[] ObstaclePositions { get; set; }
    public double Speed { get; set; }
}