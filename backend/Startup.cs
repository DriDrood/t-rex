using Microsoft.EntityFrameworkCore;

namespace T_rex.Backend;
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddSignalR();
        services.AddDbContext<Database.DB>(opt => opt.UseMySql(GetConnectionString(), ServerVersion.Parse("10.7.3-mariadb")));

        services.AddSingleton<Repositories.ConnectionRepository>();
        services.AddSingleton<Repositories.GameRepository>();
        services.AddSingleton<Repositories.PlayerRepository>();

        services.AddScoped<Managers.GameManager>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();
        app.UseEndpoints(endpoints => endpoints.MapHub<Hubs.GameHub>("/api/game"));

        Setup(app, env);
    }
    
    private string GetConnectionString()
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
    
    private void Setup(IApplicationBuilder app, IWebHostEnvironment env)
    {
        // scoped
        using (IServiceScope serviceScope = app.ApplicationServices
            .GetRequiredService<IServiceScopeFactory>()
            .CreateScope())
        {
            serviceScope.ServiceProvider.GetService<Database.DB>()!.Database.Migrate();
        }
    }
}