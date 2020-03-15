import { normalizePort } from '../normalizePort';

describe('normalizePort', () => {
  test('should return a number', () => {
    const value = 8000;

    const port = normalizePort(`${value}`);

    expect(port).toBe(value);
  });

  test('should return the pipe name', () => {
    const value = 'testing';

    const port = normalizePort(value);

    expect(port).toBe(value);
  });

  test('should return false is lower or equal to 0', () => {
    const value = -1;

    const port = normalizePort(`${value}`);

    expect(port).toBe(false);
  });
});