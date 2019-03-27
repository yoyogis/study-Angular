import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  data:any;
  @Output() testClick:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.testClick.emit(this.data);
  }

}
