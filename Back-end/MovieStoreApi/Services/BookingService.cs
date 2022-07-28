using MongoDB.Driver;
using MovieStoreApi.Models;
using MovieStoreApi.Repository;
namespace MovieStoreApi.Services
{
    public class BookingService
    {
        private readonly BookingDao _bookingDao;

        public BookingService(BookingDao bookingDao) =>
            _bookingDao = bookingDao;
        public async Task<List<Booking>> getBookingList() =>
            await _bookingDao.GetAsync();

        public async Task<Booking?> getBooking(string id) =>
            await _bookingDao.GetAsync(id);

        public async Task createBooking(Booking newBooking) =>
            await _bookingDao.CreateAsync(newBooking);

        public async Task updateBooking(string id, Booking updatedBooking) =>
            await _bookingDao.UpdateAsync(id, updatedBooking);

        public async Task deleteBooking(string id) =>
            await _bookingDao.RemoveAsync(id);
    }
}
