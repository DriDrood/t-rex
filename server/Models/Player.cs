namespace Trex.Models;

public class Player
{
    public Player(string name)
    {
        this.name = name;
        this.Id = Guid.NewGuid();
    }

    public Guid Id { get; }
    public bool IsAlive => Score == null;
    public string ConnectionId { get; set; }
    public string name { get; set; }
    public double? Score { get; set; }
    public Position Position { get; set; }
    public Velocity Velocity { get; set; }

    //keyes pressed
    public bool keyLeftPressed { get; set; }
    public bool keyRightPressed { get; set; }
    public bool keyUpPressed { get; set; }
    public bool keyDownPressed { get; set; }

    public Trex trex { get; set; }



    public void move()
    {
        CalculateXVelocity();
        CalculateYVelocity();

        updatePosition();
    }

    public void CalculateXVelocity()
    {
        if (keyLeftPressed && !keyRightPressed)
        {
            Velocity.X = -1;
        }
        else if (keyRightPressed && !keyLeftPressed)
        {
            Velocity.X = 1;
        }

    }
    public void CalculateYVelocity()
    {
        if (keyUpPressed && !keyDownPressed && Position.Y == 0 + trex.height / 2)
        {
            Velocity.Y = 10;
        }
        else if (keyDownPressed && !keyUpPressed)
        {
            Velocity.Y -= 2;
        }
        else
        {
            Velocity.Y -= 1;
        }

        // check if player is on the ground
        if (Position.Y < 0 + trex.height / 2 || (Position.Y == 0 + trex.height / 2 && keyDownPressed))
        {
            trex.crouch = true;
            Velocity.Y = 0;
            Position.Y = 0 + trex.height / 2;
        }
    }
    public void updatePosition()
    {
        Position.X += Velocity.X;
        if (Position.X < 0 + trex.width / 2)
        {
            Velocity.X = 0;
            Position.X = 0 + trex.width / 2;

        }
        else if (Position.X > 600 - trex.width / 2)
        {
            Velocity.X = 0;
            Position.X = 600 - trex.width / 2;
        }


        Position.Y += Velocity.Y;
        if (Position.Y < 0)
        {
            Position.Y = 0;
            Velocity.Y = 0;
        }
    }
}