namespace trex.Models;

public class Player
{
    public Guid Id;
    public string name { get; set; }
    public int Score { get; set; }
    public Player(string _name)
    {
        this.name = _name;
        this.Score = 0;
        this.Id = Guid.NewGuid();
    }
}