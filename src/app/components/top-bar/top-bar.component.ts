import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user/user-details.service';
import { IUser } from 'src/app/shared/interface/IUser';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isAuthenticated: boolean = false;
  userData: IUser;

  constructor(
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit(): void {
    this.userDetailsService.isAuthenticated.subscribe(isLogin => {
      if (isLogin) {
        this.userData = this.userDetailsService.getUserDetails();
        this.isAuthenticated = isLogin;
      }
    });
  }

}
