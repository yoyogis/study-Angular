import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  values:any;
  dataList:Array<any>;
  constructor() { }

  ngOnInit() {
    this.dataList = [
      {
        name:"张三",
        age:6
      },
      {
        name:"李四",
        age:9
      },
      {
        name:"王五",
        age:12
      },
      {
        name:"赵六",
        age:18
      }
    ]
  }

  testClick(evt){
    console.log(evt);
    
  }

}
