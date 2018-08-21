import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyRecipeModule } from 'projects/my-recipe/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyRecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
