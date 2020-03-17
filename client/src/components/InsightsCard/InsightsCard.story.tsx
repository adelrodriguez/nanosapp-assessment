import React from 'react';
import { InsightsCard } from './InsightsCard';
import { mockInsights } from '../../utils/mocks';

export default {
  title: 'InsightsCard',
  component: InsightsCard,
};

export const Default = () => <InsightsCard insights={mockInsights()} />;
