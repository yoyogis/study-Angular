import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test7RoutingModule } from './test7-routing.module';
import { Test8Module } from '../test8/test8.module';

@NgModule({
  imports: [
    CommonModule,
    Test7RoutingModule,
    Test8Module
  ],
  declarations: []
})
export class Test7Module { }
