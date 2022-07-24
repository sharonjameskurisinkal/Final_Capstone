import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'motion-pictures';

  constructor(private router: Router){}

  navigate(type?:String){
    if(type === 'login'){
      this.router.navigateByUrl('login');

    }

  }
}
