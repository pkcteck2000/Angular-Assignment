import { Injectable } from '@angular/core';
import { IAdminInfo } from "../../shared/interface/IAdminInfo";

@Injectable({
  providedIn: 'root'
})
export class AdmininfoService {

  adminData: IAdminInfo[] = [
    {
      name: 'Kevin',
      employeeCode: 'RT02485',
      mailId: 'Kevin@robosoftin.com'
    },
    {
      name: 'John',
      employeeCode: 'RT02486',
      mailId: 'John.Doe@robosoftin.com'
    }
  ]

  getAdminDetails = (): IAdminInfo[] => {
    return this.adminData;
  }

  addAdminData = ( data ) => {
    this.adminData.unshift(data);
  }

  removeAdminData = ( employeeCode ) => {
    this.adminData.forEach((value, index) => {
      if (value.employeeCode === employeeCode) {
        this.adminData.splice(index, 1);
      }
    });
  }
  
  constructor() { }
}
