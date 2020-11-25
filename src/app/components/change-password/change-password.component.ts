import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: any;
  isPasswordMatching = true;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.changePasswordForm = this.formBuilder.group({
      password_1: "",
      password_2: ""
    });
  }

  changePasswordAction = (formData) => {
    if (!(formData.password_1 === formData.password_2)) {
      this.isPasswordMatching = false;
    }
    else {
      this.isPasswordMatching = true;
      // TODO: check for password pattern
      // TODO: change password action
    }
  }

  closeForm = () => {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
