import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handlebanner(type: string){
    if(type==='prev'){

    }else{
      
    }

  }

  navigate(){
    this.router.navigateByUrl('movie-details');

  }

}
