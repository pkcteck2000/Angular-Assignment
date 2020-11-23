import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'update-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'message-display', component: MessageDisplayComponent },
  { path: '', loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
