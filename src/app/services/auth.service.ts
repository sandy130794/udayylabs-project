import { Injectable } from '@angular/core';
import { User } from '.././models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(userInfo: User) {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  logout() {
    localStorage.removeItem('user');
  }

}
