public class Trex
{
    public bool chrouch { get; set; }
    public int width => chrouch ? 30 : 14;
    public int height => chrouch ? 20 : 22;

    public int collisionRadius => chrouch ? 7 : 10;
    
}