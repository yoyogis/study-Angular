import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModuleService } from './remote-module/module.service';
import { RemoteModuleModule } from './remote-module/remote-module.module';

export function startupServiceFactory(startupService: ModuleService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RemoteModuleModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:"", pathMatch:"full"
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
