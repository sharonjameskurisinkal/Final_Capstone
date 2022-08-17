import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-admin-movie-list',
  templateUrl: './admin-movie-list.component.html',
  styleUrls: ['./admin-movie-list.component.scss']
})
export class AdminMovieListComponent implements OnInit {
  public movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .then((movies) => {
        console.log(movies);
        this.movies = movies as any[];
      });

  }

  deleteMovie(movieId:any){

  }

}
