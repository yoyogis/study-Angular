import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExt1Component } from './my-ext1.component';

describe('MyExt1Component', () => {
  let component: MyExt1Component;
  let fixture: ComponentFixture<MyExt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
