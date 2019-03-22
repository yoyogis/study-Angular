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

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  modules: Array<ModuleData>

  constructor(private http: Http, private compiler: Compiler) {
    
  }

  public load(){
    return this.loadInstances();
  }

  loadInstances():Promise<boolean> {
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
    return this.http.get("/configapi/instances")
      .pipe(map(res => res.json()));
  }

  loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
    let url = moduleInfo.module;
    if(url){
        // now, import the new module
        return this.loadModuleByLocationSystemJS(url).then((module) => {
          console.log(module);
          let moduleToCompile = module[`${moduleInfo.moduleName}`];
          if(moduleToCompile){
            return this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile).then(compiled => {
              console.log(compiled);
              return compiled;
            });
          }else{
            return Promise.reject(false);
          }
      });
    }else{
      return Promise.resolve(moduleInfo);
    }
    
  }

  loadModuleByLocationSystemJS(location: string): Promise<any> {
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    let url = location;
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

  getComponent(key:string, template:string, data:any){
   return this.modules.filter(m=> m.template===template).map(v=>{
      if(v){
        let field = v.parameters[key];
        if(field){
          let condition = field.condition;
          if(condition){
            let access = this.safeEval(condition, data); 
            if(access===true){
              return v.compiled.componentFactories.filter(f=>f.componentType.name===field.value)[0];
            }
          }else{
            return v.compiled.componentFactories.filter(f=>f.componentType.name===field.value)[0];
          }
        }
      }
    }).filter(c=>c)[0];
  }

  safeEval(code:string, data:any){
    try {
      return eval("(function(data){ return "+code+"})(data)");
    } catch (error) {
      return false;  
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
