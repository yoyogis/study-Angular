import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { ModuleData } from './models/module.model';
import { tap } from 'rxjs/operators';
import { ModuleService } from './remote-module/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values:any;

  constructor(){

  }

  ngOnInit(){
  }
}
