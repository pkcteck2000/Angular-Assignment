import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeLeftBarComponent } from './components/home-left-bar/home-left-bar.component';
import { HomeScreenMenuComponent } from './components/home-screen-menu/home-screen-menu.component';

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
    HomeScreenMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
