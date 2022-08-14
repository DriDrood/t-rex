namespace Trex.Models;

public class Player
{
    public Player(string nickname)
    {
        this.Nickname = nickname;
        this.Id = Guid.NewGuid();
    }

    public Guid Id { get; }
    public bool IsAlive => Score == null;
    public string ConnectionId { get; set; }
    public string Nickname { get; set; }
    public double? Score { get; set; }
    public Position Position { get; set; }
    public Velocity Velocity { get; set; }

    //keyes pressed
    public bool KeyLeftPressed { get; set; }
    public bool KeyRightPressed { get; set; }
    public bool KeyUpPressed { get; set; }
    public bool KeyDownPressed { get; set; }

    public Trex Trex { get; set; }

    public void move()
    {
        CalculateXVelocity();
        CalculateYVelocity();

        updatePosition();
    }

    public void CalculateXVelocity()
    {
        if (KeyLeftPressed && !KeyRightPressed)
        {
            Velocity.X = -1;
        }
        else if (KeyRightPressed && !KeyLeftPressed)
        {
            Velocity.X = 1;
        }
    }
    public void CalculateYVelocity()
    {
        if (KeyUpPressed && !KeyDownPressed && Position.Y == 0 + Trex.height / 2)
        {
            Velocity.Y = 10;
        }
        else if (KeyDownPressed && !KeyUpPressed)
        {
            Velocity.Y -= 2;
        }
        else
        {
            Velocity.Y -= 1;
        }

        // check if player is on the ground
        if (Position.Y < 0 + Trex.height / 2 || (Position.Y == 0 + Trex.height / 2 && KeyDownPressed))
        {
            Trex.crouch = true;
            Velocity.Y = 0;
            Position.Y = 0 + Trex.height / 2;
        }
    }
    public void updatePosition()
    {
        Position.X += Velocity.X;
        if (Position.X < 0 + Trex.width / 2)
        {
            Velocity.X = 0;
            Position.X = 0 + Trex.width / 2;

        }
        else if (Position.X > 600 - Trex.width / 2)
        {
            Velocity.X = 0;
            Position.X = 600 - Trex.width / 2;
        }

        Position.Y += Velocity.Y;
        if (Position.Y < 0)
        {
            Position.Y = 0;
            Velocity.Y = 0;
        }
    }
}