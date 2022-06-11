using Microsoft.EntityFrameworkCore;

namespace T_rex.Backend;
public static class StartupExntension
{
    public static void Setup(this WebApplication app)
    {
        // scoped
        using (IServiceScope serviceScope = app.Services
            .GetRequiredService<IServiceScopeFactory>()
            .CreateScope())
        {
            serviceScope.ServiceProvider.GetService<Database.DB>()!.Database.Migrate();
        }
    }

    public static void AddDb(this IServiceCollection self)
    {
        self.AddDbContext<Database.DB>(opt => opt.UseMySql(GetConnectionString(), ServerVersion.Parse("10.7.3-mariadb")));
    }
    
    private static string GetConnectionString()
    {
        // get config from env
        string host = Environment.GetEnvironmentVariable("MYSQL_HOST")
            ?? throw new Exception("Missing MYSQL_HOST");
        string port = Environment.GetEnvironmentVariable("MYSQL_PORT")
            ?? throw new Exception("Missing MYSQL_PORT");
        string password = Environment.GetEnvironmentVariable("MYSQL_ROOT_PASSWORD")
            ?? throw new Exception("Missing MYSQL_ROOT_PASSWORD");

        return $"server={host};port={port};database=trex;user=root;password={password}";
    }
}