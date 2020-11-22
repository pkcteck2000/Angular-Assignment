import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.changePasswordForm = this.formBuilder.group({
      password_1: "",
      password_2: ""
    });
   }

  changePasswordAction = ( formData ) => {
    console.log(formData);
    // TODO: change password process
  }

  ngOnInit(): void {
  }

}
