import { Component, OnInit } from '@angular/core';
import { ConfigService } from './ConfigService';
import { ModuleService } from '../remote-module/module.service';

@Component({
  selector: 'app-remote-module-config',
  templateUrl: './remote-module-config.component.html',
  styleUrls: ['./remote-module-config.component.css']
})
export class RemoteModuleConfigComponent implements OnInit {

  templates: Array<any>;
  instances: Array<any>;
  selectedInstance: any;
  showCreateTemplate:boolean = false;
  constructor(private configService: ConfigService, private moduleService: ModuleService) { }

  ngOnInit() {
    this.fetchTemplates();
    this.fetchInstances();
  }

  fetchInstances(){
    this.configService.getInstances().subscribe(result => {
      this.instances = result;
    });
  }

  fetchTemplates(){
    this.configService.getTemplates().subscribe(result => {
      this.templates = result;
    });
  }

  addInstance() {
    this.selectedInstance = {};
  }

  injectTypeIntoModule(module) {
    let type: any = this.templates.filter(type => type.id === module.template)[0];
    module.parameters = this.injectTypeIntoParameters(type.parameters, module.parameters);
  }

  extractInstance(instance) {
    let result: any = {
      template: instance.template, location: instance.module, moduleName: instance.moduleName
    };
    if (instance.id) {
      result.id = instance.id;
    }
    result.parameters = this.extractParameters(instance.parameters);
    return result;
  }

  loadModule(instance) {
    this.moduleService.loadModuleByLocationSystemJS(instance.module).then(loaded => {
      instance.loadedModules = Object.keys(loaded).filter(key => {
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
      if(!instance.moduleName&&instance.loadedModules.length){
        instance.moduleName = instance.loadedModules[0].name;
      }
    });
  }

  getComponentsOfSelectedInstance(instance) {
    if (instance && instance.loadedModules && instance.moduleName) {
      return instance.loadedModules.filter(loadedModule => loadedModule.name == instance.moduleName)[0].components;
    } else {
      return [];
    }
  }

  selectInstance(moduleId) {
    this.selectedInstance = this.instances.filter(module => module.id === moduleId)[0];
    this.loadModule(this.selectedInstance);
  }

  submitChange() {
    let i:any = this.selectedInstance;
    if(this.selectedInstance.loadedModules){
      i = Object.assign({}, this.selectedInstance);
      delete i.loadedModules;
    }
    if (this.selectedInstance.id) {
        this.configService.updateInstance(i).subscribe(() => {
      });
    } else {
      this.configService.createInstance(i).subscribe(() => {
        this.instances.push(this.selectedInstance);
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

  createdTemplate(){
    this.fetchTemplates();
  }

  deleteInstance(instance){
    this.configService.deleteInstance(instance.id).subscribe(()=>{
      this.fetchInstances();
    });
  }
}
