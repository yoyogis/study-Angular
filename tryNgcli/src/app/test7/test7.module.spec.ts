import { Test7Module } from './test7.module';

describe('Test7Module', () => {
  let test7Module: Test7Module;

  beforeEach(() => {
    test7Module = new Test7Module();
  });

  it('should create an instance', () => {
    expect(test7Module).toBeTruthy();
  });
});
