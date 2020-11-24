import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdmininfoService } from 'src/app/services/admin/admininfo.service';
import { SuperAdmininfoService } from 'src/app/services/admin/super-admininfo.service';
import { IAdminInfo } from '../../../../shared/interface/IAdminInfo';

@Component({
  selector: 'app-add-remove-admins',
  templateUrl: './add-remove-admins.component.html',
  styleUrls: ['./add-remove-admins.component.scss']
})

export class AddRemoveAdminsComponent implements OnInit {

  @Input() addAdminType;
  @Output() toggleModal = new EventEmitter();

  enableRowKey = 0;
  adminInfoListTemp: IAdminInfo[] = [];
  adminInfo: IAdminInfo = {
    id: '',
    name: '',
    employeeCode : '',
    mailId: ''
  };

  constructor(
    private router: Router,
    private admininfoService: AdmininfoService,
    private superAdmininfoService: SuperAdmininfoService
  ) {}

  ////////////////// Local operations //////////////////////////////
  addToAdminList = () => {
    let singleAdminInfo = {...this.adminInfo};
    this.adminInfo.name = "";
    this.adminInfo.employeeCode = "";
    this.adminInfo.mailId = "";
    this.adminInfoListTemp.unshift(singleAdminInfo);    
  }

  deleteFromAdminlist = ( admin ) => {
    this.adminInfoListTemp.forEach((value, index) => {
      if (value.employeeCode === admin.employeeCode) {
        this.adminInfoListTemp.splice(index, 1);
      }
    });
  }

  toggleEnableMode = ( key ) => {
    if(key === this.enableRowKey) {
      this.enableRowKey = 0;
    }
    else{
      this.enableRowKey = key;
    }
  }
  ////////////////////////////////////////////////////////////////

  //////////////////// Operations in service //////////////////////
  getAdminData = () => {
    if(this.addAdminType === 'Add/Remove Admins'){
      //this.adminInfoListTemp = JSON.parse(JSON.stringify(this.admininfoService.getAdminDetails()));
      //this.adminInfoListTemp = [ ...this.admininfoService.getAdminDetails() ];
      this.adminInfoListTemp = [];
      this.admininfoService.getAdminDetails().forEach((admin) => {
        this.adminInfoListTemp.push({...admin});
      });
    }
    else {
      this.adminInfoListTemp = [];
      this.superAdmininfoService.getSuperAdminDetails().forEach((admin) => {
        this.adminInfoListTemp.push({...admin});
      });
    }
  }

  updateAdminAction = () => {
    if(this.addAdminType === 'Add/Remove Admins'){
      this.admininfoService.updateAdminDetails(this.adminInfoListTemp);
      this.getAdminData();
    }
    else {
      this.superAdmininfoService.updateSuperAdminDetails(this.adminInfoListTemp);
      this.getAdminData();
    }
  }
  ////////////////////////////////////////////////////////////////

  cancelPressed = () => {
    this.toggleModal.emit('admin');
  }
  
  ngOnInit(): void {
    this.getAdminData();
    console.log(this.addAdminType);
  }
}