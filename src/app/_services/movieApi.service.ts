import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { IMovie } from '../_interfaces/imovie';

const API_KEY: string = "4daad5d31d1f26437eb291a96c0864d4";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private _dataUrl: string = "https://api.themoviedb.org/4/list/1?page=1&api_key=" + API_KEY;
  public _imageUrl: string = "https://image.tmdb.org/t/p/w500/";

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<IMovie> {
    return this.http.get<IMovie>(this._dataUrl)
                    .pipe(
                      retry(3)
                    )
  }
}
