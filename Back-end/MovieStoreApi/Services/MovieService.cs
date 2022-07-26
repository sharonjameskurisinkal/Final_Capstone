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
        public async Task<List<Movie>> getMovieList() =>
            await _movieDao.GetAsync();

        public async Task<Movie?> getMovie(string id) =>
            await _movieDao.GetAsync(id);

        public async Task createMovie(Movie newMovie) =>
            await _movieDao.CreateAsync(newMovie);

        public async Task updateMovie(string id, Movie updatedMovie) =>
            await _movieDao.UpdateAsync(id, updatedMovie);

        public async Task deleteMovie(string id) =>
            await _movieDao.RemoveAsync(id);
    }
}