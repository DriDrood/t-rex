using trex.Database;
using trex.Hubs;
using trex.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDb();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddSignalR();

var app = builder.Build();
app.MigrateDb();
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.MapControllers();

app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapHub<GameHub>("/api/game"));
app.Run();
