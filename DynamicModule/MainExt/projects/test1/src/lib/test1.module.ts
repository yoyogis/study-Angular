import { NgModule } from '@angular/core';
import { Test1Component } from './test1.component';
import { ABCComponent } from './abc/abc.component';
import { DFEComponent } from './dfe/dfe.component';
import { NameCardComponent } from './name-card/name-card.component';

@NgModule({
  declarations: [Test1Component, ABCComponent, DFEComponent, NameCardComponent],
  imports: [
  ],
  exports: [Test1Component, ABCComponent, DFEComponent, NameCardComponent]
})
export class Test1Module { }
