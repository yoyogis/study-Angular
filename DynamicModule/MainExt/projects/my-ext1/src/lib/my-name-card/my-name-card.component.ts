import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-name-card',
  templateUrl: './my-name-card.component.html',
  styleUrls: ['./my-name-card.component.css']
})
export class MyNameCardComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit() {
  }

}
