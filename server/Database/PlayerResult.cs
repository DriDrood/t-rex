using System.ComponentModel.DataAnnotations;

namespace trex.Database;

public class PlayerResult
{
    public Guid Id { get; set; }

    [Required]
    [StringLength(15)]
    public string Nickname { get; set; }
    public int Score { get; set; }
    public DateTime CreatedAt { get; set; }
}