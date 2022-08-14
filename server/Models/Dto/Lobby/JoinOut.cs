namespace trex.Models.Dto.Lobby;
public class JoinOut
{
    public Guid PlayerId { get; set; }
    public Dictionary<Guid, JoinOutPlayer> Players { get; set; }
}