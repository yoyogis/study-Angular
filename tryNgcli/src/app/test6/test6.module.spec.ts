import { Test6Module } from './test6.module';

describe('Test6Module', () => {
  let test6Module: Test6Module;

  beforeEach(() => {
    test6Module = new Test6Module();
  });

  it('should create an instance', () => {
    expect(test6Module).toBeTruthy();
  });
});
