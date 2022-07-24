import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }
  getMovies(): Promise<void | any[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log("error");
  }

}
