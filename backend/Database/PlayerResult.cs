namespace trex.Database;

public class PlayerResult
{
    public Guid Id { get; set; }

    public string Nickname { get; set; }
    public int Score { get; set; }
    public DateTime CreatedAt { get; set; }
}