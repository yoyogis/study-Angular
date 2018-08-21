import { RemoteModuleModule } from './remote-module.module';

describe('RemoteModuleModule', () => {
  let remoteModuleModule: RemoteModuleModule;

  beforeEach(() => {
    remoteModuleModule = new RemoteModuleModule();
  });

  it('should create an instance', () => {
    expect(remoteModuleModule).toBeTruthy();
  });
});
