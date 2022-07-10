public class Velocity
{
    /// <summary>
    /// The velocity of the player in the x direction.
    /// </summary>
    public int X { get; set; }
    /// <summary>
    /// The velocity of the player in the y direction.
    /// </summary>
    public int Y { get; set; }
    public Velocity(int _X, int _Y)
    {
        X = _X;
        Y = _Y;
    }
}