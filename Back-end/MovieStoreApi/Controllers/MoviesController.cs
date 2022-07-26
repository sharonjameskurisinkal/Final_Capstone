using MovieStoreApi.Models;
using MovieStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MovieStoreApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MoviesController : ControllerBase
{
    private readonly MovieService _movieService;

    public MoviesController(MovieService movieService) =>
        _movieService = movieService;

    [HttpGet]
    public async Task<List<Movie>> Get() =>
        await _movieService.getMovieList();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Movie>> Get(string id)
    {
        var movie = await _movieService.getMovie(id);

        if (movie is null)
        {
            return NotFound();
        }

        return movie;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Movie newMovie)
    {
        await _movieService.createMovie(newMovie);

        return CreatedAtAction(nameof(Get), new { id = newMovie.Id }, newMovie);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Movie updatedMovie)
    {
        var movie = await _movieService.getMovie(id);

        if (movie is null)
        {
            return NotFound();
        }

        updatedMovie.Id = movie.Id;

        await _movieService.updateMovie(id, updatedMovie);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var movie = await _movieService.getMovie(id);

        if (movie is null)
        {
            return NotFound();
        }

        await _movieService.deleteMovie(id);

        return NoContent();
    }
}