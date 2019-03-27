import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-MyExt1',
  template: `
    <p>
      my-ext1 works!
    </p>
  `,
  styles: []
})
export class MyExt1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
