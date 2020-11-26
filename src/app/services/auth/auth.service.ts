import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interface/IUser';
import { userData } from 'src/app/shared/data/userInfo';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user/user-details.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userInfo: IUser[] = userData;
  isAuthenticated = false;

  constructor(
    private router: Router,
    private userDetailsService: UserDetailsService
  ) { }

  loginUser = (loginData, alreadyLogin = false) => {
    this.userInfo.forEach((value, index) => {
      if (alreadyLogin && value.userName === loginData.username) {
        this.isAuthenticated = true;
        this.userDetailsService.setUserDetails(this.isAuthenticated);
        return this.isAuthenticated;
      }
      else if (value.userName === loginData.username && value.password === loginData.password) {
        this.isAuthenticated = true;
        let expireTime = new Date().getTime() + 5 * 60000;
        localStorage.setItem('userCredentioal', JSON.stringify({ 'username': loginData.username, expireTime }));
        this.userDetailsService.setUserDetails(this.isAuthenticated);
        return this.isAuthenticated;
      }

    });
    return this.isAuthenticated;
  }

  checkIsUserAuthenticated = () => {
    let loginData = JSON.parse(localStorage.getItem('userCredentioal'));
    let currentTime = new Date().getTime();
    if (loginData && loginData.expireTime > currentTime) {
      return this.loginUser(loginData, true);
    }
    return false;
  }
}
