import { ModuleCModule } from './module-c.module';

describe('ModuleCModule', () => {
  let moduleCModule: ModuleCModule;

  beforeEach(() => {
    moduleCModule = new ModuleCModule();
  });

  it('should create an instance', () => {
    expect(moduleCModule).toBeTruthy();
  });
});
