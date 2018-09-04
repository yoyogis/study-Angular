import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-MyRecipe',
  templateUrl:'./my-recipe.component.html',
  styles: []
})
export class MyRecipeComponent implements OnInit {

  constructor(private viewRef:ViewContainerRef) { }

  ngOnInit() {

    this.viewRef;
  }

  ngAfterViewInit() {
    debugger
    this.viewRef
  }

  myFun(){
    console.log("Hello Dss!!!")
    return "Hello TD!!!!";
  }

}

