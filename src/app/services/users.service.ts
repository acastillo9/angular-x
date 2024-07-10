import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      username: 'juan09',
      password: '123456'
    }
  ]

  constructor() { }
  
  addUser(user: User) {
    this.users.push(user)
  }

  findUser(username: string) {
    return this.users.find((user) => user.username === username)
  }
}
