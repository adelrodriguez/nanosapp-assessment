import React from 'react';
import { render } from '@testing-library/react';
import { SelectMultipleInput } from './SelectMultipleInput';

describe('SelectMultiplInput', () => {
  test('renders label and values', () => {
    const label = 'Lorem Ipsum';
    const value1 = 'Testing1';
    const value2 = 'Testing2';

    const { getByText, getAllByText } = render(
      <SelectMultipleInput label={label} values={[value1, value2]} />
    );

    expect(getAllByText(label)).toBeTruthy();
    expect(getByText(value1)).toBeTruthy();
    expect(getByText(value2)).toBeTruthy();
  });
});
