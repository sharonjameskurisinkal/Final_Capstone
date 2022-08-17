import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-admin-movie-list',
  templateUrl: './admin-movie-list.component.html',
  styleUrls: ['./admin-movie-list.component.scss']
})
export class AdminMovieListComponent implements OnInit {
  public movies: any[] = [];

  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .then((movies) => {
        console.log(movies);
        this.movies = movies as any[];
      });

  }

  deleteMovie(movieId:any){
    let confirmAction = confirm("Are you sure to delete this movie?");
    if (confirmAction) {
      // API to delete student using student ID
      this.movieService
      .deleteMovie(movieId)
      .then((movies) => {
            // On successfull deletion showing message and redirection to listing
            this.toastr.success("Movie removed successfully.")
            window.location.reload();

        });
    }

  }

}
