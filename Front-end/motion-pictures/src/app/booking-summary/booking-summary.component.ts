import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent implements OnInit {
  public movieDetail: any;
  public selectedTheatre: any;
  public ticketCost: any;
  public convenienceFee: any;
  public tax: any;


  constructor(public movieService: MovieService, private toastr: ToastrService) {
    console.log(this.movieService.selectedMovie);
    console.log(this.movieService.selectedTheatre);
    console.log(this.movieService.selectedShow);
    this.movieDetail = this.movieService.selectedMovie;
    this.ticketCost = Number(this.movieService.selectedShow.price) * Number(movieService.selectedMovie.selectedSeatsCount);
    this.convenienceFee = Number(this.movieService.selectedShow.convenienceFee);
    this.tax = ((Number(this.ticketCost)) * 13) / 100;
    this.movieService.paymentDetails = {
      'ticketCost': this.ticketCost,
      'convenienceFee': this.convenienceFee,
      'tax': this.tax,
      'total': this.ticketCost + this.convenienceFee +this.tax,
    }

  }

  ngOnInit(): void {
  }

}
