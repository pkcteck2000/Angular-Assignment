import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/manageDataForUi/data-service.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  message = "Message...";

  constructor(
    private dataServiceService: DataServiceService,
  ) { }

  ngOnInit(): void {
    this.dataServiceService.currentMessage.subscribe((message) => {
      this.message = message;
    }
    )
  }

}
