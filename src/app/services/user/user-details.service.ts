import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userData } from 'src/app/shared/data/userInfo';
import { IUser } from 'src/app/shared/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userInfo: IUser[] = userData;
  userData: IUser;

  private authentication = new BehaviorSubject(false);
  isAuthenticated = this.authentication.asObservable();

  constructor() { }

  setUserDetails = (isLogin) => {
    const userCredentioal = JSON.parse(localStorage.getItem('userCredentioal'));
    this.userInfo.forEach((value, index) => {
      if (value.userName === userCredentioal.username) {
        this.userData = value;
      }
    });
    this.authentication.next(isLogin);
  }

  getUserDetails = (): IUser => {
    return this.userData;
  }
}
