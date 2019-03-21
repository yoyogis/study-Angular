import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModuleTypeComponent } from './create-module-type.component';

describe('CreateModuleTypeComponent', () => {
  let component: CreateModuleTypeComponent;
  let fixture: ComponentFixture<CreateModuleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModuleTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModuleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
