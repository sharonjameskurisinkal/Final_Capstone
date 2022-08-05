import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'movie-details', component: MovieDetailComponent },
      { path: 'login', component: AdminLoginComponent },

      { path: 'booking', component: MovieBookingComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
