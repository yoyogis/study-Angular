import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameCardRedComponent } from './my-name-card-red.component';

describe('MyNameCardRedComponent', () => {
  let component: MyNameCardRedComponent;
  let fixture: ComponentFixture<MyNameCardRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNameCardRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNameCardRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
