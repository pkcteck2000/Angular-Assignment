import { Injectable } from '@angular/core';
import { AdminInfo } from '../shared/interface/admin-info';

@Injectable({
  providedIn: 'root'
})
export class SuperAdmininfoService {

  adminData: AdminInfo[] = [
    {
      name: 'Super Kevin',
      employeeCode: 'RT02485',
      mailId: 'Kevin@robosoftin.com'
    },
    {
      name: 'Super John',
      employeeCode: 'RT02486',
      mailId: 'John.Doe@robosoftin.com'
    }
  ]

  constructor() { }

  getSuperAdminDetails = (): AdminInfo[] => {
    return this.adminData;
  }

  addSuperAdminData = ( data ) => {
    this.adminData.unshift(data);
  }

  removeSuperAdminData = ( employeeCode ) => {
    this.adminData.forEach((value, index) => {
      if (value.employeeCode === employeeCode) {
        this.adminData.splice(index, 1);
      }
    });
  }
  
}