import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent implements OnInit {
  public movieDetail:  any;
  public selectedTheatre:  any;
  public selectedShow:  any;

  constructor(private movieService: MovieService,private toastr: ToastrService) { 
    console.log(this.movieService.selectedMovie);
    console.log(this.movieService.selectedTheatre);
    console.log(this.movieService.selectedShow);
    this.movieDetail = this.movieService.selectedMovie;
  }

  ngOnInit(): void {
  }

}
