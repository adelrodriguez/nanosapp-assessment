import React from 'react';
import { useCampaignSummaries } from '../../hooks/useCampaignSummaries';
import { CampaignsTable } from './CampaignsTable';

export { CampaignsTable };

export default function() {
  const [campaigns, loading] = useCampaignSummaries();

  return (
    <CampaignsTable
      campaigns={campaigns}
      loading={loading}
      onCampaignPress={console.log}
    />
  );
}
