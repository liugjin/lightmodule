import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, LogoDetailComponent } from './components';
import { SharedModule } from '../shared';
import { LoginRoutingModule } from './login-routing.module';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [LoginComponent, LogoDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class LoginModule { }
