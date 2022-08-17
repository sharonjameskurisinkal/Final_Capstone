import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';


@Component({
  selector: 'app-admin-movie-create-update',
  templateUrl: './admin-movie-create-update.component.html',
  styleUrls: ['./admin-movie-create-update.component.scss']
})
export class AdminMovieCreateUpdateComponent implements OnInit {
  public formGroup: FormGroup;
  private movieId:  any;
  public movieDetail: any;
  public IsCreate = false;

  constructor(private fb: FormBuilder, private movieService: MovieService, private router: Router,
    private toastr: ToastrService,) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      rating: ['', Validators.required],
      release_date: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.router);
    let url = this.router.url.split('/');
    console.log(url);
    
    this.movieId = url[2] ? url[2] : '';
    if (this.movieId) {
      this.movieService
        .getMovieDetail(this.movieId)
        .then(movie => {
          console.log(movie);
          this.movieDetail = movie;
          this.movieService.selectedMovie = movie;
          this.setMovieData();
        });

    }
  }

  setMovieData(){
    this.formGroup.controls['name'].setValue(this.movieDetail.name);
    this.formGroup.controls['description'].setValue(this.movieDetail.description);
    this.formGroup.controls['rating'].setValue(this.movieDetail.rating);
    this.formGroup.controls['release_date'].setValue(this.movieDetail.release_date);
    this.formGroup.controls['duration'].setValue(this.movieDetail.duration);
  }

  cancelMovieDetails() {
    this.router.navigate(['admin-movie-list']);

  }


  createOrUpdateMovieDetails() {
    let movieData = this.movieDetail;
    if(this.formGroup.valid){
      movieData.name = this.formGroup.controls['name'].value;
      movieData.description = this.formGroup.controls['description'].value;
      movieData.rating = this.formGroup.controls['rating'].value;
      movieData.release_date = this.formGroup.controls['release_date'].value;
      movieData.duration = this.formGroup.controls['duration'].value;

    this.movieService
      .updateMovie(movieData)
      .then(movies => {
        this.toastr.success("Movie details updated successfully.");
        this.router.navigate(['admin-movie-list']);
      });

    
    }else{
      this.toastr.success("All fields are required and enter valid data.");

    }

  }

}
