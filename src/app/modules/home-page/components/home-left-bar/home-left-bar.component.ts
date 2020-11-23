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

  newQuestionnaireAction = () => {
    console.log("New Questionnaires");
    // TODO: New Questionnaires action
  }

  optionsSelector = ( option ) => {
    console.log(option);
    // TODO: Options Selector action
  }

  ngOnInit(): void {
  }

}