import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import faker from 'faker';
import { SelectMultipleInput } from './SelectMultipleInput';

export default {
  title: 'SelectMultipleInput',
  component: SelectMultipleInput,
};

export const Default = () => (
  <SelectMultipleInput
    label={text('label', 'Lorem')}
    values={Array(number('values', 3))
      .fill(undefined)
      .map(faker.hacker.noun)}
  />
);
