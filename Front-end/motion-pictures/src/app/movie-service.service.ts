import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = environment.apiURL;
  selectedMovie : any;
  selectedShow : any;
  selectedTheatre : any;
  paymentDetails : any;

  constructor(private http: HttpClient) { }
  getMovies(): Promise<void | any[]> {
    return this.http.get(this.apiUrl+'/api/movies')
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  getMovieDetail(id:string): Promise<void | any[]> {
    return this.http.get(this.apiUrl+'/api/movies/'+id)
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log("error");
  }

}
