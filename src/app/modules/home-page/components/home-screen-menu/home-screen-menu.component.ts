import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-screen-menu',
  templateUrl: './home-screen-menu.component.html',
  styleUrls: ['./home-screen-menu.component.scss']
})
export class HomeScreenMenuComponent implements OnInit {

  @Output() menuClickListner = new EventEmitter();

  constructor() { }

  optionClicked = ( option ) => {
    this.menuClickListner.emit(option);
  }

  ngOnInit(): void {
  }

}
