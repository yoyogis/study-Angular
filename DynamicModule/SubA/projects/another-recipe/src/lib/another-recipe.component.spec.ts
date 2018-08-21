import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherRecipeComponent } from './another-recipe.component';

describe('AnotherRecipeComponent', () => {
  let component: AnotherRecipeComponent;
  let fixture: ComponentFixture<AnotherRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
