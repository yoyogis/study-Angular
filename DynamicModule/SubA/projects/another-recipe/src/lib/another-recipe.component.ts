import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-AnotherRecipe',
  template: `
    <p>
      another-recipe works!
      <nz-tag>Tag 1</nz-tag>
      123
    </p>
  `,
  styles: []
})
export class AnotherRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
