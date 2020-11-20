import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})

export class HomeScreenComponent implements OnInit {

  closeIcon = "add";
  overlay = false;

  toggleOverlayMode = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add"? "close" : "add";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
