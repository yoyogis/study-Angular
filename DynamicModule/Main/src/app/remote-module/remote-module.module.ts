import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DssPluginDirective } from './dss-plugin.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DssPluginDirective
  ],
  exports:[
    DssPluginDirective
  ]
})
export class RemoteModuleModule { }
