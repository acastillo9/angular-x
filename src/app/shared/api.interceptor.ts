import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const headers: Record<string, string> = {};

  const jwtToken = authService.getToken();
  if (jwtToken) {
    headers['Authorization'] = `Bearer ${jwtToken}`;
  }

  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    headers['Content-Type'] = 'application/json';
  }

  const newReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    // add content type header for all requests
    setHeaders: headers,
  });
  return next(newReq);
};
