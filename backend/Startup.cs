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
        services.AddCors(opt => opt.AddPolicy("def", p => p.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:8080").AllowCredentials()));
        services.AddSignalR();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseCors("def");
        app.UseRouting();

        if (!env.IsDevelopment())
            app.UseAuthorization();

        app.UseEndpoints(endpoints => endpoints.MapHub<Hubs.GameHub>("/api/game"));
    }
}