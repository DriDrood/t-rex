using trex.Database;
using trex.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDb();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddSignalR();
// remove on production
builder.Services.AddCors(opt => opt.AddPolicy("any", policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

var app = builder.Build();
// remove on production
app.UseCors("any");
app.MigrateDb();
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.MapControllers();

app.UseRouting();
app.UseEndpoints(endpoints => endpoints.MapHub<GameHub>("/api/game"));
app.Run();
