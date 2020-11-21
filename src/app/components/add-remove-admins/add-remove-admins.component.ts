import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-admins',
  templateUrl: './add-remove-admins.component.html',
  styleUrls: ['./add-remove-admins.component.scss']
})
export class AddRemoveAdminsComponent implements OnInit {

  @Input() addAdminType;

  constructor() { }

  updateAdmin = () => {
    console.log(this.addAdminType);
  }

  ngOnInit(): void {
  }

}
