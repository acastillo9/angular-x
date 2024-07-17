import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User | undefined = undefined

  constructor(private usersService: UsersService) { }

  login(username: string, password: string): Observable<void> {
    return this.usersService.findUser(username).pipe(map((user) => {
      if (!user || user.password !== password) {
        throw new Error('Usuario o contraseña incorrectos')
      }
      localStorage.setItem('user', user.username)
      this.loggedUser = user;
      return
    }));
  }

  getLocalSession(): Observable<boolean> | boolean {
    const username = localStorage.getItem('user')
    if (username) {
      return this.usersService.findUser(username).pipe(map((user) => {
        this.loggedUser = user;
        return true
      }))
    }
    return false
  }

  isLoggedIn() {
    return !!this.loggedUser
  }

  logout() {
    this.loggedUser = undefined
    localStorage.clear()
  }
}
