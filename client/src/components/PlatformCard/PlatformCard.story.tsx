import React from 'react';
import { PlatformCard } from './PlatformCard';
import { mockPlatform } from '../../utils/mocks';

export default {
  title: 'PlatformCard',
  component: PlatformCard,
};

export const Default = () => (
  <PlatformCard name="Facebook" platform={mockPlatform()} />
);
