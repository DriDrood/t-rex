namespace Trex.Models;
public class Trex
{
    public bool crouch { get; set; }
    public int width => crouch ? 30 : 14;
    public int height => crouch ? 20 : 22;

    public int collisionRadius => crouch ? 7 : 10;
    
}