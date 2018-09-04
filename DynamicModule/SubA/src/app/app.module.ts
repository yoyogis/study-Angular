import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyRecipeModule } from 'projects/my-recipe/src/public_api';
import { AnotherRecipeModule } from 'projects/another-recipe/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyRecipeModule,
    AnotherRecipeModule,
    RouterModule.forRoot([
      {
        path:"modulec",
        loadChildren:"./module-c/module-c.module#ModuleCModule"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
