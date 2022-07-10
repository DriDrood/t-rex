namespace trex.Models.Dto.Lobby;
public class JoinOut
{
    public Guid PlayerId { get; set; }
    public JoinOutPlayer[] Players { get; set; }
}