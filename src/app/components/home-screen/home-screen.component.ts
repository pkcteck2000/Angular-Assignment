import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  toggleOverlayMode = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add"? "close" : "add";
  }

  toggleModal = ( addType ) => {
    console.log(addType);
    this.addAdminType = addType=="admin"?"Add/Remove Admins":"Add/Remove Super Admins";
    $("#myModal").click();
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
}
