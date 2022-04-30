namespace T_rex.Backend.Models.Dto;
public record Joined
(
    string PlayerId,
    Dictionary<string, JoinedPlayer> Players,
    String MasterId
);
