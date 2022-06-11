using T_rex.Backend;
using T_rex.Backend.Hubs;
using T_rex.Backend.Managers;
using T_rex.Backend.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddDb();
builder.Services.AddSingleton<ConnectionRepository>();
builder.Services.AddSingleton<GameRepository>();
builder.Services.AddSingleton<PlayerRepository>();
builder.Services.AddScoped<GameManager>();
builder.Services.AddScoped<HallOfFameManager>();

WebApplication app = builder.Build();
app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapHub<GameHub>("/api/game"));
app.Setup();
app.Run();
