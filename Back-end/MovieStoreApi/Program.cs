using MovieStoreApi.Models;
using MovieStoreApi.Repository;
using MovieStoreApi.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<MovieStoreDatabaseSettings>(
builder.Configuration.GetSection("MovieStoreDatabase"));
builder.Services.AddTransient<MovieService>();
builder.Services.AddSingleton<MovieDao>();
builder.Services.AddSingleton<BookingDao>();

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddScoped<IAdminService, AdminService>();
builder.Services.AddScoped<BookingService>();
builder.Services.AddSingleton<AdminDao>();
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
app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

app.MapControllers();

app.Run();
