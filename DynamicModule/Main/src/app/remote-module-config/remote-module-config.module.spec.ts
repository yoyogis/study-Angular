import { RemoteModuleConfigModule } from './remote-module-config.module';

describe('RemoteModuleConfigModule', () => {
  let remoteModuleConfigModule: RemoteModuleConfigModule;

  beforeEach(() => {
    remoteModuleConfigModule = new RemoteModuleConfigModule();
  });

  it('should create an instance', () => {
    expect(remoteModuleConfigModule).toBeTruthy();
  });
});
