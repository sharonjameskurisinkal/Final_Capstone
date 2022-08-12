import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
  private movieId: Number | any;
  public movieDetail:  any;

  constructor(private router: ActivatedRoute, private movieService: MovieService) {
    this.router.queryParams.subscribe(params => {
      console.log(params);
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.movieId) {
      this.movieService
        .getMovieDetail(this.movieId)
        .then(movie => {
          console.log(movie);
          this.movieDetail = movie ;
          this.movieService.selectedMovie = movie;
        });

    }
  }

}
