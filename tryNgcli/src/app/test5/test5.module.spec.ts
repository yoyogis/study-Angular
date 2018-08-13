import { Test5Module } from './test5.module';

describe('Test5Module', () => {
  let test5Module: Test5Module;

  beforeEach(() => {
    test5Module = new Test5Module();
  });

  it('should create an instance', () => {
    expect(test5Module).toBeTruthy();
  });
});
