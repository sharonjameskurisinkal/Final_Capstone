import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'movie-details', component: MovieDetailComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
