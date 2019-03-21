import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteModuleConfigComponent } from './remote-module-config.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RouterModule } from '@angular/router';
import { ObjectEditorComponent } from './object-editor/object-editor.component';
import { RemoteModuleModule } from '../remote-module/remote-module.module';
import { CreateModuleTypeComponent } from './create-module-type/create-module-type.component';
registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      {
        path:"",
        redirectTo:"",
        component:RemoteModuleConfigComponent
      }
    ]),
    FormsModule,
    HttpClientModule,
    RemoteModuleModule
  ],
  declarations: [RemoteModuleConfigComponent, ObjectEditorComponent, CreateModuleTypeComponent],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class RemoteModuleConfigModule { }
