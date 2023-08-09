import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/auth/data-access/user.model';
import { map } from 'rxjs';

const url = 'http://localhost:3000/auth';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: IUser) {
    return this.http.post(`${url}/sign-up`, user);
  }
  login(username: string, password: string) {
    return this.http.post<IUser>(`${url}/sign-in`, { username, password }).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      })
    );
  }
}
