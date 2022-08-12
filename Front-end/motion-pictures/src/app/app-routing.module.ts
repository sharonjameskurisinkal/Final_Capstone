import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'movie-details', component: MovieDetailComponent },
      { path: 'login', component: AdminLoginComponent },

      { path: 'booking', component: MovieBookingComponent },
      { path: 'booking-summary', component: BookingSummaryComponent },
      { path: 'payment', component: PaymentComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
