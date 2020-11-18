import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  message = "Message...";
  
  constructor(
    private dataServiceService: DataServiceService,
    private router: Router,
  ) { }

  okayPressed = () => {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.dataServiceService.currentMessage.subscribe( (message) => 
      {
        this.message = message;
      }
    )
  }

}
