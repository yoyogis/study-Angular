import { Test8Module } from './test8.module';

describe('Test8Module', () => {
  let test8Module: Test8Module;

  beforeEach(() => {
    test8Module = new Test8Module();
  });

  it('should create an instance', () => {
    expect(test8Module).toBeTruthy();
  });
});
