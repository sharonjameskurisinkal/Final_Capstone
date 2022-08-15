import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {
  public movieDetail:  any;
  public showSeats = false;
  selectedSeatsCount :Number | undefined;
  constructor(private movieService: MovieService,private toastr: ToastrService ,private router: Router,) {
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
    this.movieService.selectedShow = selectedShow;
    this.movieService.selectedTheatre = selectedTheatre;

  }

  navigate(){
    if(this.selectedSeatsCount && this.selectedSeatsCount > 0){
      this.movieService.selectedMovie.selectedSeatsCount = this.selectedSeatsCount;
      this.router.navigate(['booking-summary']);

    }else{
      this.toastr.error("Enter seat count.")
    }
  }

}
