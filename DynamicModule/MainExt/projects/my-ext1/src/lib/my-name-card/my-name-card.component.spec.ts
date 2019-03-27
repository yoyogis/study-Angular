import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameCardComponent } from './my-name-card.component';

describe('MyNameCardComponent', () => {
  let component: MyNameCardComponent;
  let fixture: ComponentFixture<MyNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
