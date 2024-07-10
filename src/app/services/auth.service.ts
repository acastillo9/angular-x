import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User | undefined = undefined

  constructor(private usersService: UsersService) { 
    const username = localStorage.getItem('user')
    this.loggedUser = username ? this.usersService.findUser(username) : undefined
  }

  login(username: string, password: string) {
    const user = this.usersService.findUser(username);
    if (!user || user.password !== password) {
      throw new Error('Usuario o contraseña incorrectos')
    }
    localStorage.setItem('user', user.username)
    this.loggedUser = user;
    return true
  } 

  isLoggedIn() {
    return !!this.loggedUser
  }

  logout() {
    this.loggedUser = undefined
    localStorage.clear()
  }
}
