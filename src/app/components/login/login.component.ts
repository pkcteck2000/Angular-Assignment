import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../../services/manageDataForUi/data-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private router: Router,
    private dataServiceService: DataServiceService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: "",
      password: ""
    });
  }

  loginAction = (formData) => {
    if (this.authService.loginUser(formData)) {
      this.router.navigate(['']);
    }
  }

  forgotPassword = () => {
    let message = "Check your email. We have sent a link to update your password "
    this.dataServiceService.changeMessage(message);
    this.router.navigate(['message-display']);
  }

  ngOnInit(): void {
  }

}
