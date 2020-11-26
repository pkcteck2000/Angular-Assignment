import { Injectable } from '@angular/core';
import { adminData } from 'src/app/shared/data/adminInfo';
import { IAdminInfo } from '../../shared/interface/IAdminInfo';

@Injectable({
  providedIn: 'root'
})
export class AdmininfoService {

  adminData: IAdminInfo[] = adminData;

  getAdminDetails = (): IAdminInfo[] => {
    return this.adminData;
  }

  updateAdminDetails = (data) => {
    console.log(data);
    console.log(this.adminData);
    this.adminData = data;
  }

  constructor() { }
}
