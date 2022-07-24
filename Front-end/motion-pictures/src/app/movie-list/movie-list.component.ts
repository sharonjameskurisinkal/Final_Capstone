import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit { 
  public movies: any[] = [];


  constructor(private router: Router,private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService
      .getMovies()
      .then(movies => {
        console.log(movies);
        
        // this.movies = students as any[];
      });
  }


  navigate(){
    this.router.navigateByUrl('movie-details');

  }

}
