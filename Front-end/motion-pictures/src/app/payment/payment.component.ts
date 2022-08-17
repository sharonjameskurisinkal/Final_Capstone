import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public formGroup: FormGroup;
  public paymentformGroup: FormGroup;
  public showPaymentCard = false;
  selectedMovie: any;
  selectedTheatre: any;
  selectedShow: any;
  paymentDetails: any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public movieService: MovieService,) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
    this.paymentformGroup = this.fb.group({
      name: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      code: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      expiry: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.selectedMovie = this.movieService.selectedMovie;
    this.selectedTheatre = this.movieService.selectedTheatre;
    this.selectedShow = this.movieService.selectedShow;
    this.paymentDetails = this.movieService.paymentDetails;
    console.log(this.selectedMovie);
    console.log(this.selectedTheatre);
    console.log(this.selectedShow);
    console.log(this.paymentDetails);

  }

  validateCredentials() {
    if (this.formGroup?.valid) {
      this.showPaymentCard = true;
      this.formGroup.controls['email'].disable();
      this.formGroup.controls['phone'].disable();
    } else {
      console.log('test');

      this.toastr.error("Enter valid Email and Phone number.")

    }
  }

  saveTicket() {
    if(this.paymentformGroup.valid) {
    let ticketData = {
      "id": this.selectedMovie.id,
      "type": this.selectedShow.type,
      "ticketType": this.selectedShow.type,
      "count": this.selectedMovie.selectedSeatsCount,
      "total": this.paymentDetails.total,
      "seats": [1],
      "convenienceFee": this.paymentDetails.convenienceFee,
      "movieId": this.selectedMovie.id,
      "theatreName": this.selectedTheatre.name,
      "tax": this.paymentDetails.tax,
      "time": this.selectedShow.time

    };
    this.movieService
      .saveTicket(ticketData)
      .then(movies => {
        this.toastr.success("Your movie tickets are booked. Enjoy your show.");
      });

    
    }else{
      this.toastr.success("All fields are required and enter valid data.");

    }

  }

}
function then(arg0: (student: any) => void) {
  throw new Error('Function not implemented.');
}

