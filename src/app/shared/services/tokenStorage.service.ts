import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'auth-user-id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    //console.log('TokenStorageService.getToken()', window.sessionStorage.getItem(TOKEN_KEY));
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(USER_ID, user.id);
  }

  public getUserId(): any {
    return window.sessionStorage.getItem(USER_ID);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user).id;
    }
    return {};
  }

}
