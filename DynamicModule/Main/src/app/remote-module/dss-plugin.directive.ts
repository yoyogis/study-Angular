import { Directive, Input, ViewContainerRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ModuleService } from './module.service';

@Directive({
  selector: '[dssPlugin]'
})
export class DssPluginDirective {

  @Input() type:string;
  @Input() valueFields:Array<string>;
  @Input() filter:any;
  @Input() attachPoint:string;
  @Input() template:string;
  @Input() data:any;
  @Input() defaultComponent:any;
  @Output() values:EventEmitter<any> = new EventEmitter();
  constructor(private modeuleService:ModuleService, private viewRef:ViewContainerRef) { 
    
  }

  ngOnInit(){
    if(this.attachPoint){
      this.type = 'component';
      this.valueFields = [this.attachPoint];
    }

    if(this.template){
      this.filter = this.filter||{};
      this.filter.type = this.template; 
    }
    //let v = this.modeuleService.getValue(this.valueField, this.filter);
    if(this.type=='component'){
      let componentFactory = this.modeuleService.getComponent(this.attachPoint, this.template, this.data);
      if(componentFactory){
          this.viewRef.clear();
          let componentRef = this.viewRef.createComponent(componentFactory);
          componentRef.instance["data"] = this.data;
      }else{
        this.viewRef.createEmbeddedView(this.defaultComponent);
      }
    }else{
      let v = this.modeuleService.getValues(this.valueFields, this.filter);
      this.values.emit(v)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data){
      
    }
  }
}
