using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MovieStoreApi.Models;

namespace MovieStoreApi.Repository
{
    public class BookingDao
    {
        private readonly IMongoCollection<Booking> _bookingsCollection;

        public BookingDao(
            IOptions<MovieStoreDatabaseSettings> movieStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                movieStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                movieStoreDatabaseSettings.Value.DatabaseName);

            _bookingsCollection = mongoDatabase.GetCollection<Booking>(
                movieStoreDatabaseSettings.Value.BookingsCollectionName);
        }

        public async Task<List<Booking>> GetAsync() =>
            await _bookingsCollection.Find(_ => true).ToListAsync();

        public async Task<Booking?> GetAsync(string id) =>
            await _bookingsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Booking newBooking) =>
            await _bookingsCollection.InsertOneAsync(newBooking);

        public async Task UpdateAsync(string id, Booking updatedBooking) =>
            await _bookingsCollection.ReplaceOneAsync(x => x.Id == id, updatedBooking);

        public async Task RemoveAsync(string id) =>
            await _bookingsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
