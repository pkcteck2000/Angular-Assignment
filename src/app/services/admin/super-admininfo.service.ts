import { Injectable } from '@angular/core';
import { superAdminData } from 'src/app/shared/data/adminInfo';
import { IAdminInfo } from '../../shared/interface/IAdminInfo';

@Injectable({
  providedIn: 'root'
})
export class SuperAdmininfoService {

  adminData: IAdminInfo[] = superAdminData;

  constructor() { }

  getSuperAdminDetails = (): IAdminInfo[] => {
    return this.adminData;
  }

  updateSuperAdminDetails = (data) => {
    this.adminData = data;
  }

}