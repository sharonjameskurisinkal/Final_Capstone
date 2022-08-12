import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {
  public movieDetail:  any;
  constructor(private movieService: MovieService) {
    console.log(this.movieService.selectedMovie);
    this.movieDetail = this.movieService.selectedMovie;
   }

  ngOnInit(): void {
  }

}
