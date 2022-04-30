using Microsoft.EntityFrameworkCore;
using T_rex.Backend.Database.Entities;

namespace T_rex.Backend.Database;
public class DB : DbContext
{
    public DB(DbContextOptions<DB> options) : base(options)
    { }
    public DB() : this(new DbContextOptions<DB>())
    { }

    public DbSet<Result> Results => Set<Result>();
}
