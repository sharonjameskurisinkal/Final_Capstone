using MovieStoreApi.Models;
using MovieStoreApi.Repository;
using MovieStoreApi.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<MovieStoreDatabaseSettings>(
builder.Configuration.GetSection("MovieStoreDatabase"));
builder.Services.AddTransient<MovieService>();
builder.Services.AddSingleton<MovieDao>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
