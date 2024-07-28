import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: User | undefined = undefined;

  constructor(
    private usersService: UsersService,
    private httpClient: HttpClient,
  ) {}

  login(username: string, password: string): Observable<void> {
    return this.httpClient
      .post<{ access_token: string }>('/auth/login', { username, password })
      .pipe(
        map((response) => {
          localStorage.setItem('access_token', response.access_token);
        }),
        catchError((errorResponse) => {
          return throwError(() => new Error(errorResponse.error.message));
        }),
      );
  }

  getToken() {
    return localStorage.getItem('access_token') || '';
  }

  getLocalSession(): Observable<boolean> | boolean {
    const username = localStorage.getItem('user');
    if (username) {
      return this.usersService.findUser(username).pipe(
        map((user) => {
          this.loggedUser = user;
          return true;
        }),
      );
    }
    return false;
  }

  isLoggedIn() {
    return !!this.loggedUser;
  }

  logout() {
    this.loggedUser = undefined;
    localStorage.clear();
  }
}
