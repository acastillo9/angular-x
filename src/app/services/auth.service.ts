import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: User | undefined = undefined;

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<void> {
    return this.httpClient
      .post<{ access_token: string }>('/auth/login', { username, password })
      .pipe(
        map(response => {
          localStorage.setItem('access_token', response.access_token);
        }),
        catchError(errorResponse => {
          return throwError(() => new Error(errorResponse.error.message));
        })
      );
  }

  loadProfile(): Observable<User> {
    return this.httpClient
      .get<User>('/auth/me')
      .pipe(tap(user => (this.loggedUser = user)));
  }

  getToken() {
    return localStorage.getItem('access_token') || '';
  }

  isLoggedIn() {
    return !!this.loggedUser;
  }

  logout() {
    this.loggedUser = undefined;
    localStorage.clear();
  }
}
