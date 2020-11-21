import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import { HomeLeftBarComponent } from './components/home-left-bar/home-left-bar.component';
import { HomeScreenMenuComponent } from './components/home-screen-menu/home-screen-menu.component';
import { AddRemoveAdminsComponent } from './components/add-remove-admins/add-remove-admins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from './modules/angular-materials/angular-materials.module';
import { TextSlicePipe } from './pipes/text-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    LoginComponent,
    ChangePasswordComponent,
    HomeScreenComponent,
    MessageDisplayComponent,
    HomeLeftBarComponent,
    HomeScreenMenuComponent,
    AddRemoveAdminsComponent,
    TextSlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
