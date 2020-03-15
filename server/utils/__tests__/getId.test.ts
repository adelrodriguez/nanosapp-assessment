import { getId } from '../getId';

describe('getId', () => {
  test('should return the id from the request', () => {
    const value = 1231231;
    const req = { params: { id: `${value}` } };
    const id = getId(req);

    expect(id).toBe(value);
  });

  test('should return undefined if id is not a number', () => {
    const value = 'testing';
    const req = { params: { id: `${value}` } };
    const id = getId(req);

    expect(id).toBe(undefined);
  });
});
