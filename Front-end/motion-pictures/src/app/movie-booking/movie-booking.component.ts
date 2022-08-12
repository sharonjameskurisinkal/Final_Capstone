import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {
  public movieDetail:  any;
  public showSeats = false;
  constructor(private movieService: MovieService) {
    console.log(this.movieService.selectedMovie);
    this.movieDetail = this.movieService.selectedMovie;
   }

  ngOnInit(): void {
  }

  selectShow(selectedShow: any,selectedTheatre: any){
    console.log(selectedShow);
    console.log(selectedTheatre);
    selectedShow.selected = true;
    selectedTheatre.selected = true;
    this.showSeats = true;

  }

}
