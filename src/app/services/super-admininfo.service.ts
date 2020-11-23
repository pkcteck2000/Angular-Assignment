import { Injectable } from '@angular/core';
import { IAdminInfo } from '../shared/interface/IAdminInfo';

@Injectable({
  providedIn: 'root'
})
export class SuperAdmininfoService {

  adminData: IAdminInfo[] = [
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

  getSuperAdminDetails = (): IAdminInfo[] => {
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