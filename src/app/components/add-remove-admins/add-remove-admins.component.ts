import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdmininfoService } from 'src/app/services/admininfo.service';
import { SuperAdmininfoService } from 'src/app/services/super-admininfo.service';
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
    private admininfoService: AdmininfoService,
    private superAdmininfoService: SuperAdmininfoService
  ) {}


  getAdminData = () => {
    if(this.addAdminType === 'Add/Remove Admins'){
      this.adminInfoList = this.admininfoService.getAdminDetails();
    }
    else {
      this.adminInfoList = this.superAdmininfoService.getSuperAdminDetails();
    }
  }

  addToAdminList = () => {
    let singleAdminInfo = {...this.adminInfo};
    this.adminInfo.name = "";
    this.adminInfo.employeeCode = "";
    this.adminInfo.mailId = "";

    if(this.addAdminType === 'Add/Remove Admins'){
      this.admininfoService.addAdminData(singleAdminInfo);
    }
    else {
      this.superAdmininfoService.addSuperAdminData(singleAdminInfo);
    }
    this.getAdminData();
  }

  deleteFromAdminlist = ( admin ) => {
    if(this.addAdminType === 'Add/Remove Admins'){
      this.admininfoService.removeAdminData(admin.employeeCode);
    }
    else {
      this.superAdmininfoService.removeSuperAdminData(admin.employeeCode);
    }
    this.getAdminData();
  }

  updateAdminList = ( ) => {
    console.log();
  }

  cancelPressed = () => {
    this.toggleModal.emit('admin');
  }
  
  ngOnInit(): void {
    this.getAdminData();
    console.log(this.addAdminType);
  }

}
