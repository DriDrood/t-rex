using System.ComponentModel.DataAnnotations;

namespace trex.Models.Dto.Lobby;
public class CreateIn
{
    [Required]
    [RegularExpression("\\w{3,15}", ErrorMessage = "Nickname must be 3 to 15 character long and have only letters or numbers")]
    public string Nickname { get; set; }
}
