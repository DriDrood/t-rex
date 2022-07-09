using System.ComponentModel.DataAnnotations;

namespace trex.Models.Dto.HallOfFame;
public class AddIn
{
    [Required]
    [Range(3, 15)]
    public string Nickname { get; set; }
    [Required]
    public int Score { get; set; }
}