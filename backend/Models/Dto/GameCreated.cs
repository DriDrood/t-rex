namespace T_rex.Backend.Models.Dto;
public record GameCreated
(
    Guid GameId,
    string PlayerId,
    string Nickname
);