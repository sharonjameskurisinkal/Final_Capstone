import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMovieListComponent } from './admin-movie-list/admin-movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StreamPageComponent } from './stream-page/stream-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieBookingComponent,
    BookingSummaryComponent,
    PaymentComponent,
    AdminLoginComponent,
    AdminMovieListComponent,
    ContactUsComponent,
    StreamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
