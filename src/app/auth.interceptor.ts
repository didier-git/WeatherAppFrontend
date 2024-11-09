import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Clona la solicitud y agrega el encabezado
    const clonedRequest = request.clone({
      setHeaders: {
        'Authorization':`Bearer ${localStorage.getItem('token')}` // Reemplaza "tu_token_aqui" con el token deseado o variable
      }
    });
    return next.handle(clonedRequest);
  }
}
