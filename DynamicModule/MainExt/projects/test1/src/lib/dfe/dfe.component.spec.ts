import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFEComponent } from './dfe.component';

describe('DFEComponent', () => {
  let component: DFEComponent;
  let fixture: ComponentFixture<DFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
