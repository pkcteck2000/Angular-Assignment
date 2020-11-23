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

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
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

  closeForm = () => {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
