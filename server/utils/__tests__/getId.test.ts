import { getId } from '../getId';

describe('getId', () => {
  test('should return the id from the request', () => {
    const value = 1231231;
    const params = { id: `${value}` };
    const id = getId(params);

    expect(id).toBe(value);
  });

  test('should return undefined if id is not a number', () => {
    const value = 'testing';
    const params = { id: `${value}` };
    const id = getId(params);

    expect(id).toBe(undefined);
  });
});
