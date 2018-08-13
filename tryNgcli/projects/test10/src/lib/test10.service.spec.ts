import { TestBed, inject } from '@angular/core/testing';

import { Test10Service } from './test10.service';

describe('Test10Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test10Service]
    });
  });

  it('should be created', inject([Test10Service], (service: Test10Service) => {
    expect(service).toBeTruthy();
  }));
});
