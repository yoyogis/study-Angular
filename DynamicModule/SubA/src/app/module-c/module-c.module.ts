import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ModuleCComponent } from './module-c.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [ModuleCComponent]
})
export class ModuleCModule { }
