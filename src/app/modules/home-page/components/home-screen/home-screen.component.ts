import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})

export class HomeScreenComponent implements OnInit {

  closeIcon = "add";
  overlay = false;
  addAdminType = "";
  enableModal: boolean = false;

  toggleOverlayMode = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add" ? "close" : "add";
  }

  toggleModal = (addType) => {

    this.enableModal = false;
    setTimeout(() => {
      this.enableModal = true;
    }, 10);

    this.addAdminType = addType == "admin" ? "Add/Remove Admins" : "Add/Remove Super Admins";
    $("#myModal").click();
  }

  menuClickListner = (actionType) => {
    console.log(`${actionType} is clicked`);
    // TODO: Do the action for save, preview, publish, add_alert, article
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
}
