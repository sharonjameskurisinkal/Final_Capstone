using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MovieStoreApi.Models;
using MovieStoreApi.Repository;

namespace MovieStoreApi.Services
{
    public class MovieService
    {
        private readonly MovieDao _movieDao;

        public MovieService(MovieDao movieDao) =>
            _movieDao = movieDao;

        public async Task<List<Movie>> getMovieList()
        {
            List<Movie> movieList = await Task.Run(() => _movieDao.GetAsync());

            foreach (Movie movie in movieList)
            {
                updateStatus(movie);
            }

            return movieList;
        }


        public async Task<Movie?> getMovie(string id)
        {
            var movie = await Task.Run(() => _movieDao.GetAsync(id));
            updateStatus(movie);
            return movie;
        }

        public async Task createMovie(Movie newMovie) =>
            await _movieDao.CreateAsync(newMovie);

        public async Task updateMovie(string id, Movie updatedMovie) =>
            await _movieDao.UpdateAsync(id, updatedMovie);

        public async Task deleteMovie(string id) =>
            await _movieDao.RemoveAsync(id);

        private void updateStatus(Movie movie)
        {
            foreach (Theatre theatre in movie.theatres)
            {
                foreach (Show show in theatre.shows)
                {
                    {
                        if (show.seatsAvailable < 5)
                        {
                            show.status = "Fast Filling";
                        }
                        else
                        {
                            show.status = "Available";
                        }
                    }
                }
            }
        }
    }
}