/* "Barrel" of Http Interceptors */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlingInterceptor } from './errorHandling.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
/*     { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor , multi: true },*/
     { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
];