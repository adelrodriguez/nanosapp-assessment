import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { CampaignsTable } from './CampaignsTable';
import { mockCampaignSummary } from '../../utils/mocks';

export default {
  title: 'CampaignsTable',
  component: CampaignsTable,
  decorators: [withKnobs],
};

export const Default = () => (
  <CampaignsTable
    campaigns={mockCampaignSummary(3)}
    loading={boolean('loading', false)}
    onCampaignPress={action('Pressed campaign')}
  />
);

export const Empty = () => (
  <CampaignsTable
    campaigns={[]}
    loading={boolean('loading', false)}
    onCampaignPress={action('Pressed campaign')}
  />
);
