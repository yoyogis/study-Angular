import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dssPlugin]'
})
export class PluginDirective {

  constructor(private _el: ViewContainerRef) { 

  }

  ngOnInit(){
    console.log(this._el);
  }

}
