public class velocity
{
    /// <summary>
    /// The velocity of the player in the x direction.
    /// </summary>
    public int vX { get; set; }
    /// <summary>
    /// The velocity of the player in the y direction.
    /// </summary>
    public int vY { get; set; }
    public velocity(int _vX, int _vY)
    {
        vX = _vX;
        vY = _vY;
    }
}