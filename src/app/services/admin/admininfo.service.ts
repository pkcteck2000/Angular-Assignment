import { Injectable } from '@angular/core';
import { IAdminInfo } from "../../shared/interface/IAdminInfo";

@Injectable({
  providedIn: 'root'
})
export class AdmininfoService {

  adminData: IAdminInfo[] = [
    {
      id: '1',
      name: 'Kevin',
      employeeCode: 'RT02485',
      mailId: 'Kevin@robosoftin.com'
    },
    {
      id: '2',
      name: 'John',
      employeeCode: 'RT02486',
      mailId: 'John.Doe@robosoftin.com'
    }
  ]

  getAdminDetails = (): IAdminInfo[] => {
    return this.adminData;
  }

  updateAdminDetails = ( data ) => {
    this.adminData = data;
  }
  
  constructor() { }
}
