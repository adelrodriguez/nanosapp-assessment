import { currency } from '../currency';

describe('currency', () => {
  test('should return a formatted string', () => {
    expect(currency(10000)).toBe('10,000.00');
    expect(currency(100000)).toBe('100,000.00');
    expect(currency(1000000)).toBe('1,000,000.00');
    expect(currency(343.345)).toBe('343.35');
  });
});
