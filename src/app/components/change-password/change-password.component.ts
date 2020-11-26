import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { DataServiceService } from 'src/app/services/manageDataForUi/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: any;
  isPasswordMatching;
  ifFormateMatching;
  isFormSubmited = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private dataServiceService: DataServiceService,
  ) {
    this.changePasswordForm = this.formBuilder.group({
      password_1: "",
      password_2: ""
    });
  }

  changePasswordAction = (formData) => {
    this.isFormSubmited = true;
    if (!(formData.password_1 === formData.password_2)) {
      this.isPasswordMatching = false;
    }
    else {
      this.isPasswordMatching = true;
      console.log(formData.password_1.length);
      if(formData.password_1.length<8){
        this.ifFormateMatching = false;
        // TODO: check for password pattern
      }
      else {
        this.ifFormateMatching = true;
        // TODO: change password action
        let message = "Password changed Successfully"
        this.dataServiceService.changeMessage(message);
        this.router.navigate(['message-display']);
      }
    }
  }

  closeForm = () => {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
