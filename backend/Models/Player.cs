namespace T_rex.Backend.Models;
public class Player
{
    public Player(string id, string nickname)
    {
        Id = id;
        Nickname = nickname;
    }

    public string Id { get; set; }
    public string Nickname { get; set; }
    public Game? Game { get; set; }
}