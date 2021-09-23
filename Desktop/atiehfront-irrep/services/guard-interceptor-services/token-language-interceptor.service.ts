import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoginService } from '../api-services/auth/auth.service';
import { Observable } from 'rxjs';

/**
 * This http interceptor add Authorization header to any HTTP request
 */
@Injectable()
export class TokenLanguageInterceptor implements HttpInterceptor {
  constructor(public auth: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          local: localStorage.getItem('language') || 'en-US'
        }
      });
    }

    return next.handle(request);
  }
}
