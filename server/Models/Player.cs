namespace Trex.Models;

public class Player
{
    public Player(string name)
    {
        this.name = name;
        this.Score = 0;
        this.Id = Guid.NewGuid();
    }

    public Guid Id { get; }
    public string ConnectionId { get; set; }
    public string name { get; set; }
    public double Score { get; set; }
    public Position Position { get; set; }
    public Position Velocity { get; set; }

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
            Velocity.x = -1;
        }
        else if (keyRightPressed && !keyLeftPressed)
        {
            Velocity.x = 1;
        }

    }
    public void CalculateYVelocity()
    {
        if (keyUpPressed && !keyDownPressed && Position.y == 0 + trex.height / 2)
        {
            Velocity.y = 10;
        }
        else if (keyDownPressed && !keyUpPressed)
        {
            Velocity.y -= 2;
        }
        else
        {
            Velocity.y -= 1;
        }

        // check if player is on the ground
        if (Position.y < 0 + trex.height / 2 || (Position.y == 0 + trex.height / 2 && keyDownPressed))
        {
            trex.crouch = true;
            Velocity.y = 0;
            Position.y = 0 + trex.height / 2;
        }
    }
    public void updatePosition()
    {
        Position.x += Velocity.x;
        if (Position.x < 0 + trex.width / 2)
        {
            Velocity.x = 0;
            Position.x = 0 + trex.width / 2;

        }
        else if (Position.x > 600 - trex.width / 2)
        {
            Velocity.x = 0;
            Position.x = 600 - trex.width / 2;
        }


        Position.y += Velocity.y;
        if (Position.y < 0)
        {
            Position.y = 0;
            Velocity.y = 0;
        }
    }
}