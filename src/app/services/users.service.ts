import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      username: 'juan09',
      password: '123456',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  // async addUser(user: User) {
  //   try {
  //     const response = await fetch('http://localhost:3000/users', {
  //       method: 'POST',
  //       body: JSON.stringify(user),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user, {
      headers: {
        'content-Type': 'application/json',
      },
    });
  }

  findUser(username: string): Observable<User> {
    return this.httpClient
      .get<User[]>(`http://localhost:3000/users?username=${username}`)
      .pipe(map((users: User[]) => users[0])); // TODO remove this if you remove json-server
  }
}
