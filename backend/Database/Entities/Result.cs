#pragma warning disable CS8618
namespace T_rex.Backend.Database.Entities;
public class HallOfFame
{
    public Guid Id { get; set; }

    public string Nickname { get; set; }
    public int Score { get; set; }
    public DateTime CreatedAt { get; set; }
}
