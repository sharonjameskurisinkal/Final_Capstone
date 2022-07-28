using MongoDB.Driver;
using MovieStoreApi.Models;
using MovieStoreApi.Repository;
namespace MovieStoreApi.Services
{
    public class BookingService
    {
        private readonly BookingDao _bookingDao;
        private readonly MovieDao _movieDao;

        public BookingService(BookingDao bookingDao, MovieDao movieDao) { 
            _bookingDao = bookingDao;
            _movieDao = movieDao;
         }
        public async Task<List<Booking>> getBookingList() =>
            await _bookingDao.GetAsync();

        public async Task<Booking?> getBooking(string id) =>
            await _bookingDao.GetAsync(id);
        
        public async Task createBooking(Booking newBooking) {
            Movie movie = await Task.Run(() => _movieDao.GetAsync(newBooking.movieId));
            foreach (Theatre theatre in movie.theatres)
            {
                if (theatre.name == newBooking.theatreName)
                {
                    foreach (Show show in theatre.shows)
                    {
                        if (show.time == newBooking.time)
                        {
                            show.seatsAvailable = show.seatsAvailable - newBooking.count;
                        }
                    }
                }
            }
            await _movieDao.UpdateAsync(newBooking.movieId,movie);
            await _bookingDao.CreateAsync(newBooking);
    }

        public async Task updateBooking(string id, Booking updatedBooking) =>
            await _bookingDao.UpdateAsync(id, updatedBooking);

        public async Task deleteBooking(string id) =>
            await _bookingDao.RemoveAsync(id);
    }
}
