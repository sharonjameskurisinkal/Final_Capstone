using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MovieStoreApi.Models;

namespace MovieStoreApi.Repository
{
    public class AdminDao
    {
        private readonly IMongoCollection<Admin> _adminCollection;

        public AdminDao(
            IOptions<MovieStoreDatabaseSettings> movieStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                movieStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                movieStoreDatabaseSettings.Value.DatabaseName);

            _adminCollection = mongoDatabase.GetCollection<Admin>(
                movieStoreDatabaseSettings.Value.AdminsCollectionName);
        }

        public async Task<List<Admin>> GetAsync() =>
            await _adminCollection.Find(_ => true).ToListAsync();

    }
}
