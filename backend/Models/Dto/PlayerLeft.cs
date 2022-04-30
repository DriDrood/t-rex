namespace T_rex.Backend.Models.Dto;
public class PlayerLeft
{
    public PlayerLeft(string playerId, string masterId)
    {
        PlayerId = playerId;
        MasterId = masterId;
    }
    public string PlayerId { get; set; }
    public string MasterId { get; set; }
}