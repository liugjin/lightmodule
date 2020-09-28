import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavigationBarComponent, MenuComponent } from './components';



@NgModule({
  declarations: [
    NavigationBarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    NavigationBarComponent,
    MenuComponent
  ]
})
export class SharedModule { }
