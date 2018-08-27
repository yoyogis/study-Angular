import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModuleService } from './remote-module/module.service';
import { RemoteModuleModule } from './remote-module/remote-module.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function startupServiceFactory(startupService: ModuleService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RemoteModuleModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:"layout", pathMatch:"full"
      },{
        path:'layout', 
        component:AppLayoutComponent
      },{
        path:'config', loadChildren:"./remote-module-config/remote-module-config.module#RemoteModuleConfigModule"
      }
    ]
    )
  ],
  providers: [ModuleService, {
    // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [ModuleService],
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
