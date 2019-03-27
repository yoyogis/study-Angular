import { TestBed } from '@angular/core/testing';

import { MyExt1Service } from './my-ext1.service';

describe('MyExt1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyExt1Service = TestBed.get(MyExt1Service);
    expect(service).toBeTruthy();
  });
});
