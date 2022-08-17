import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public movieService: MovieService,private router: Router) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login(){
    if(this.formGroup.valid){
      let credentials = {
        
          "username": this.formGroup.controls['email'].value,
          "password": this.formGroup.controls['password'].value
        
      }

      this.movieService
      .login(credentials)
      .then(result => {
        console.log(result);
        this.router.navigate(['admin-movie-list']);
        
        // this.toastr.success("Your movie tickets are booked. Enjoy your show.");
      });

    }else{
      this.toastr.error('Enter valid email and password.')
    }

  }

}
