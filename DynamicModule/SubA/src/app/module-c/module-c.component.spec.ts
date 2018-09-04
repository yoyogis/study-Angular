import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCComponent } from './module-c.component';

describe('ModuleCComponent', () => {
  let component: ModuleCComponent;
  let fixture: ComponentFixture<ModuleCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
