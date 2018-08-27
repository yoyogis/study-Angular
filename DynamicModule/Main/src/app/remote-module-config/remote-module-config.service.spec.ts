import { TestBed, inject } from '@angular/core/testing';

import { RemoteModuleConfigService } from './remote-module-config.service';

describe('RemoteModuleConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteModuleConfigService]
    });
  });

  it('should be created', inject([RemoteModuleConfigService], (service: RemoteModuleConfigService) => {
    expect(service).toBeTruthy();
  }));
});
