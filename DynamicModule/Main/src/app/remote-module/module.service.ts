import { Injectable, Compiler } from '@angular/core';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { ModuleData } from './module.model';
// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as AngularClarity from '@clr/angular';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  modules: Array<ModuleData>

  constructor(private http: Http, private compiler: Compiler) {
    
  }

  public load(){
    return this.loadModules();
  }

  loadModules():Promise<boolean> {
    return new Promise(resolve=>{
      this.fetchConfig().pipe(map((modules: Array<ModuleData>) => {
        this.modules = modules;
        let all = modules.map(module => this.loadModuleSystemJS(module));
        Promise.all(all).then(compiles => {
          modules.forEach((module, index) => {
            module.compiled = compiles[index];
          })
          console.log(modules);
          resolve(true);
        });
      })).subscribe();
    })
  }

  fetchConfig(): Observable<any> {
    return this.http.get("./assets/modules.json")
      .pipe(map(res => res.json()));
  }

  loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
    let url = moduleInfo.location;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));

    // now, import the new module
    return this.loadModuleByLocationSystemJS(url).then((module) => {
      console.log(module);
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        console.log(compiled);
        return compiled;
      });
    });
  }

  loadModuleByLocationSystemJS(location: string): Promise<any> {
    let url = location;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));

    return SystemJS.import(`${url}`);
  }

  filterModule(filter:any):Array<ModuleData>{
    return this.modules.filter(module=>{
      if(module.id==filter.id){
        return true;
      }else{
        let match = true;
        Object.keys(filter).forEach(key=>{
          let configvalue = this._getObjectValueByPath(module, key);
          if(configvalue!==filter[key]){
            match = false;
          }
        });
        return match;
      }
    });
  }

  filterModuleBestMatch(filter:any):ModuleData{
    return this.filterModule(filter)[0];
  }

  getValue(key:string, filter:any){
    let v:ModuleData = this.filterModuleBestMatch(filter);
    if(v){
      return v[key];
    }
  }

  getValues(keys:Array<string>, filter:any){
    let v:ModuleData = this.filterModuleBestMatch(filter);
    if(v){
      let result = {};
      keys.forEach(key=>result[key] = this._getObjectValueByPath(v,key))
      return result;
    }
  }

  getComponent(key:string, filter:any){
    let v:ModuleData = this.filterModuleBestMatch(filter);
    if(v){
      let selectorName = v.parameters[key];
      return v.compiled.componentFactories.filter(f=>f.selector===selectorName)[0];
    }
  }

  _getObjectValueByPath(obj:any, path:string){
    if(obj&&path){
      let tempObj = obj;
      path.split(".").forEach(key=>{
        tempObj = tempObj[key]
      });
      return tempObj;
    }else{
      return obj;
    }
  }
}
