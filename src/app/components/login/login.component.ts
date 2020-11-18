import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dataServiceService: DataServiceService,
  ) { }

  forgotPassword = () => {
    let message = "Check your email. We have sent a link to update your password "
    this.dataServiceService.changeMessage(message);
    this.router.navigate(['message-display']);
  }

  ngOnInit(): void {
  }

}
