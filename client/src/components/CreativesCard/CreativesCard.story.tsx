import React from 'react';
import { CreativesCard } from './CreativesCard';
import { mockCreatives } from '../../utils/mocks';

export default {
  title: 'CreativesCard',
  component: CreativesCard,
};

export const Default = () => <CreativesCard creatives={mockCreatives()} />;
