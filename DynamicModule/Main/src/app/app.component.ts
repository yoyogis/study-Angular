import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModuleService } from './services/module.service';
import { RouterService } from './services/router.service';
import { ModuleData } from './models/module.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  installedModules$:any;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private moduleService:ModuleService, private routerService:RouterService){

  }

  ngOnInit(){
    this.installedModules$ = this.moduleService.loadModules().pipe(tap(res =>{
      debugger
      res.forEach(x => {
        if(x.registered){
          this.registerRoute(x);
        }
    })
    }
  ));
  }


      private registerRoute(moduleToEnable: ModuleData){
        // load up the umd file and register the route whenever succeeded.
        this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
          this.routerService.createAndRegisterRoute(moduleToEnable, exports);
          const cmpRef = this._container.createComponent(exports.componentFactories[0]);
        }, (err) => this.showError(`${moduleToEnable.moduleName} could not be found, did you copy the umd file to ${moduleToEnable.location}?`, err));
    }

    private showError(message: string, err) {
        
        console.log(err); // Log error in console
    }

    closeError() {
       
    }
}
