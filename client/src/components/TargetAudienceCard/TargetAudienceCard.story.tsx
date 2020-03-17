import React from 'react';
import { TargetAudienceCard } from './TargetAudienceCard';
import { mockTargetAudience } from '../../utils/mocks';

export default {
  title: 'TargetAudienceCard',
  component: TargetAudienceCard,
};

export const Default = () => (
  <TargetAudienceCard targetAudience={mockTargetAudience()} />
);
