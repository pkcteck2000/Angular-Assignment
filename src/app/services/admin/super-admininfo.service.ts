import { Injectable } from '@angular/core';
import { IAdminInfo } from '../../shared/interface/IAdminInfo';

@Injectable({
  providedIn: 'root'
})
export class SuperAdmininfoService {

  adminData: IAdminInfo[] = [
    {
      id: '1',
      name: 'Super Kevin',
      employeeCode: 'RT02485',
      mailId: 'Kevin@robosoftin.com'
    },
    {
      id: '1',
      name: 'Super John',
      employeeCode: 'RT02486',
      mailId: 'John.Doe@robosoftin.com'
    }
  ]

  constructor() { }

  getSuperAdminDetails = (): IAdminInfo[] => {
    return this.adminData;
  }

  updateSuperAdminDetails = ( data ) => {
    this.adminData = data;
  }
  
}