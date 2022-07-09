namespace trex.Models;

public class Player
{
    public string name { get; set; }
    public int score { get; set; }
    public Player(string _name)
    {
        this.name = _name;
        this.score = 0;
    }
}