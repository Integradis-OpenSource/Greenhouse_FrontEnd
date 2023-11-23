import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

//const AUTH_API = 'http://localhost:8080/api/v1/authentication/';
const AUTH_API = 'https://greenhouse.zeabur.app/api/v1/authentication/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'sign-in', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { username: any; email: any; password: any; roles: any}): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', {
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles
    }, httpOptions);
  }


}
