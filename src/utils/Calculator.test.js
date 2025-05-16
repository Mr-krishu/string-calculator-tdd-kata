import { add } from './Calculator';

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });

  test('returns sum for two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

});
