import React from 'react';
import { render } from '@testing-library/react';
import { SelectMultipleInput } from './SelectMultipleInput';

describe('SelectMultiplInput', () => {
  test('renders label', () => {
    const label = 'Lorem Ipsum';

    const { getAllByText } = render(
      <SelectMultipleInput label={label} values={[]} />
    );

    expect(getAllByText(label)).toBeTruthy();
  });
});
