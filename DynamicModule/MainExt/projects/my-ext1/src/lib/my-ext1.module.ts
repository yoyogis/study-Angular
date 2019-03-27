import { NgModule } from '@angular/core';
import { MyExt1Component } from './my-ext1.component';
import { MyNameCardComponent } from './my-name-card/my-name-card.component';
import { MyNameCardRedComponent } from './my-name-card-red/my-name-card-red.component';

@NgModule({
  declarations: [MyExt1Component, MyNameCardComponent, MyNameCardRedComponent],
  imports: [
  ],
  exports: [MyExt1Component, MyNameCardComponent, MyNameCardRedComponent]
})
export class MyExt1Module { }
