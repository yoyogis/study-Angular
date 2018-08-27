import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteModuleConfigComponent } from './remote-module-config.component';

describe('RemoteModuleConfigComponent', () => {
  let component: RemoteModuleConfigComponent;
  let fixture: ComponentFixture<RemoteModuleConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteModuleConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteModuleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
