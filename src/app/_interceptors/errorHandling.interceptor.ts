import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.log('Error Ocurred');
    return throwError(error.message || 'Server Error');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const myHeader = new HttpHeaders({
      'Name': 'Dhruv Bindoria'
    })*/

    const reqClone = request.clone({ 
     // setHeaders: {'Name': 'Dhruv Bindoria'}
     //headers: myHeader
    });
    
    return next.handle(reqClone)
               .pipe(
                 catchError(this.handleError)
               );
  }
}
