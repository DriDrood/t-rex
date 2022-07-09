using Microsoft.EntityFrameworkCore;

namespace trex.Database;

public class DB : DbContext
{
    public DB(DbContextOptions<DB> options) : base(options)
    { }

    public DbSet<PlayerResult> PlayerResults => Set<PlayerResult>();
}
