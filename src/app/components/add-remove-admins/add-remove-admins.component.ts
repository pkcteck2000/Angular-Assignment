import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { AdminInfo } from '../../shared/interface/admin-info';

@Component({
  selector: 'app-add-remove-admins',
  templateUrl: './add-remove-admins.component.html',
  styleUrls: ['./add-remove-admins.component.scss']
})
export class AddRemoveAdminsComponent implements OnInit {

  @Input() addAdminType;
  @Output() toggleModal = new EventEmitter();

  adminInfoList: AdminInfo[] = [];
  adminInfo: AdminInfo = {
    name: '',
    employeeCode : '',
    mailId: ''
  };

  constructor(
    private router: Router,
  ) { }

  addToAdminList = () => {
    let singleAdminInfo = {...this.adminInfo};
    this.adminInfo.name = "";
    this.adminInfo.employeeCode = "";
    this.adminInfo.mailId = "";
    this.adminInfoList.unshift(singleAdminInfo);
  }

  deleteFromAdminlist = ( admin ) => {
    this.adminInfoList.forEach((value, index) => {
      if (value === admin) {
        this.adminInfoList.splice(index, 1);
      }
    });
  }

  updateAdminList = () => {
    console.log(this.addAdminType);
  }

  updateAdminAction = () => {
    console.log(this.addAdminType);
    console.log(this.adminInfoList);
    // TODO: Update Admin process
  }

  cancelPressed = () => {
    this.adminInfoList = [];
    this.toggleModal.emit('admin');
  }
  
  ngOnInit(): void {
  }

}
