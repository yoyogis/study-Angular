import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PluginDirective } from './plugin.directive';

@NgModule({
  declarations: [
    AppComponent,
    PluginDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:"", pathMatch:"full"
      }
    ]
    )
  ],
  providers: [ModuleService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
