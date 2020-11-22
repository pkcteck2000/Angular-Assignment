import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-left-bar',
  templateUrl: './home-left-bar.component.html',
  styleUrls: ['./home-left-bar.component.scss']
})
export class HomeLeftBarComponent implements OnInit {

  OPTIONS = [
      "Secure coding Guidelence",
      "ISMS Questionnaire",
      "PA Questionnaire",
      "Process Guidelines"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}