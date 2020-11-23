import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from './modules/angular-materials/angular-materials.module';
import { PipeModule } from './modules/pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    ChangePasswordComponent,
    MessageDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialsModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
