namespace T_rex.Backend.Models;
public class Player
{
    public Player(string nickname, string playerId)
    {
        Nickname = nickname;
        PlayerId = playerId;
    }
    
    public string PlayerId { get; set; }
    public string Nickname { get; set; }
}