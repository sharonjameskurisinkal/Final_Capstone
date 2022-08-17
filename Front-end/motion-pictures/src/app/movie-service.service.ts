import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = environment.apiURL;
  selectedMovie: any;
  selectedShow: any;
  selectedTheatre: any;
  paymentDetails: any;

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  getMovies(): Promise<void | any[]> {
    return this.http.get(this.apiUrl + '/api/movies')
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  getMovieDetail(id: string): Promise<void | any[]> {
    return this.http.get(this.apiUrl + '/api/movies/' + id)
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  saveTicket(ticket: any): Promise<void | any> {
    return this.http.post(this.apiUrl + '/api/Booking/', ticket).toPromise()
      .then(response => response as any).catch(this.handleError);
  }

  login(credentials: any): Promise<void | any> {
    return this.http.post(this.apiUrl + '/Admin/authenticate', credentials).toPromise()
      .then(response => response as any).catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error.error.message);

    // this.toastr.error(error.error.message)
  }

}
