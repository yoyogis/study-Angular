import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'object-editor',
  templateUrl: './object-editor.component.html',
  styleUrls: ['./object-editor.component.css']
})
export class ObjectEditorComponent implements OnInit {

  @Input() parameters:any;
  @Input() components:any;
  constructor() { }

  ngOnInit() {
  }

  isObject(value){
    return (typeof value == 'object')
  }
}
