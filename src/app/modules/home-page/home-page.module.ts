import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { HomeLeftBarComponent } from './components/home-left-bar/home-left-bar.component';
import { HomeScreenMenuComponent } from './components/home-screen-menu/home-screen-menu.component';
import { AddRemoveAdminsComponent } from './components/add-remove-admins/add-remove-admins.component';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';
import { PipeModule } from 'src/app/modules/pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    HomeLeftBarComponent,
    HomeScreenMenuComponent,
    AddRemoveAdminsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    AngularMaterialsModule,
    PipeModule
  ]
})
export class HomePageModule { }
