import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { CampaignDetails } from './CampaignDetails';
import { mockCampaign } from '../../utils/mocks';

export default {
  title: 'CampaignDetails',
  component: CampaignDetails,
};

export const Default = () => (
  <CampaignDetails
    campaign={mockCampaign()}
    loading={boolean('loading', false)}
  />
);
