import { Directive, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { ModuleService } from './module.service';

@Directive({
  selector: '[dssPlugin]'
})
export class DssPluginDirective {

  @Input() type:string;
  @Input() valueFields:Array<string>;
  @Input() filter:any;
  @Input() component:string;
  @Input() module:string;
  @Output() values:EventEmitter<any> = new EventEmitter();
  constructor(private modeuleService:ModuleService, private viewRef:ViewContainerRef) { 
    
  }

  ngOnInit(){
    if(this.component){
      this.type = 'component';
      this.valueFields = [this.component];
    }

    if(this.module){
      this.filter = this.filter||{};
      this.filter.type = this.module; 
    }
    //let v = this.modeuleService.getValue(this.valueField, this.filter);
    if(this.type=='component'){
      let componentFactory = this.modeuleService.getComponent(this.valueFields[0], this.filter);
      if(componentFactory){
          this.viewRef.createComponent(componentFactory);
        }
    }else{
      let v = this.modeuleService.getValues(this.valueFields, this.filter);
      this.values.emit(v)
    }
  }
}
