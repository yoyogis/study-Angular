import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../ConfigService';

@Component({
  selector: 'create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  @Input()
  show:boolean = false;
  @Output()
  showChange:EventEmitter<boolean> = new EventEmitter();
  @Output()
  onCreated:EventEmitter<boolean> = new EventEmitter();
  data:Array<any>;
  id:string;
  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.data = this.data||[];
  }

  handleCancel(){
    this.show = false;
    this.showChange.emit(this.show)
  }

  handleOk(){
    let data = {
      id:this.id,
      parameters:{

      }
    }
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      data.parameters[item.name] = item.type;
    }
    this.service.createTemplate(data).subscribe(()=>{
      this.show = false;
      this.showChange.emit(this.show);
      this.onCreated.emit(true);  
    })
  }

  addParameter(){
    this.data.push({
      name:"",
      value:""
    });
  }
}
