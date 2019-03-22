import { Component, OnInit } from '@angular/core';
import { RemoteModuleConfigService } from './remote-module-config.service';
import { ModuleService } from '../remote-module/module.service';

@Component({
  selector: 'app-remote-module-config',
  templateUrl: './remote-module-config.component.html',
  styleUrls: ['./remote-module-config.component.css']
})
export class RemoteModuleConfigComponent implements OnInit {

  moduleTypes: Array<any>;
  modules: Array<any>;
  selectedModule: any;
  showCreateModuleType:boolean = false;
  constructor(private configService: RemoteModuleConfigService, private moduleService: ModuleService) { }

  ngOnInit() {
    this.fetchModuleTypes();
    this.fetchModules();
  }

  fetchModules(){
    this.configService.getModules().subscribe(modules => {
      this.modules = modules;
    });
  }

  fetchModuleTypes(){
    this.configService.getModuleTypes().subscribe(types => {
      this.moduleTypes = types;
    });
  }

  addModule() {
    this.selectedModule = {};
  }

  injectTypeIntoModule(module) {
    let type: any = this.moduleTypes.filter(type => type.id === module.type)[0];
    module.parameters = this.injectTypeIntoParameters(type.parameters, module.parameters);
  }

  extractModule(module) {
    let result: any = {
      type: module.type, location: module.location, moduleName: module.moduleName
    };
    if (module.id) {
      result.id = module.id;
    }
    result.parameters = this.extractParameters(module.parameters);
    return result;
  }

  loadModule(module) {
    this.moduleService.loadModuleByLocationSystemJS(module.module).then(loaded => {
      module.loadedModules = Object.keys(loaded).filter(key => {
        let value = loaded[key];
        return value.decorators.filter(decorator => decorator.type.prototype.ngMetadataName == "NgModule").length > 0;
      }).map(name => {
        let components = [];
        loaded[name].decorators.forEach(decorator => {
          components = components.concat(decorator.args[0].exports.map(cls => cls.name));
        })
        return {
          name: name,
          moduleEntity: loaded[name],
          components: components
        }
      });
    });
  }

  getComponentsOfSelectedModule(module) {
    if (module && module.loadedModules && module.moduleName) {
      return module.loadedModules.filter(loadedModule => loadedModule.name == module.moduleName)[0].components;
    } else {
      return [];
    }
  }

  selectModule(moduleId) {
    this.selectedModule = this.modules.filter(module => module.id === moduleId)[0];
  }

  submitChange() {
    if (this.selectedModule.id) {
      this.configService.updateModule(this.selectedModule).subscribe(() => {

      });
    } else {
      this.configService.createModule(this.selectedModule).subscribe(() => {
        this.modules.push(this.selectedModule);
      });
    }
  }

  injectTypeIntoParameters(typeStructor, valueObject) {
    let parameters = {};
    valueObject = valueObject || {};
    for (const key in typeStructor) {
      let type = typeStructor[key];
      let value = valueObject[key];
      if (typeof type == "object") {
        parameters[key] = this.injectTypeIntoParameters(type, value);
      } else {
        parameters[key] = {
          type: type,
          value: value || ""
        };
      }
    }
    return parameters;
  }

  extractParameters(valueObject) {
    let parameters = {};
    for (const key in valueObject) {
      let aFieldObj = valueObject[key];
      if (aFieldObj && aFieldObj.type && (typeof aFieldObj.type) == "string") {
        parameters[key] = aFieldObj.value;
      } else if (aFieldObj) {
        parameters[key] = this.extractParameters(aFieldObj);
      }
    }
    return parameters;
  }

  createdModuleType(){
    this.fetchModuleTypes();
  }

  deleteModule(module){
    this.configService.deleteModule(module.id).subscribe(()=>{
      this.fetchModules();
    });
  }
}
