import React from 'react';
import { CampaignDetails } from './CampaignDetails';
import { useCampaign } from '../../hooks';

interface Props {
  id: number;
}

export default function({ id }: Props) {
  const [campaign, loading] = useCampaign(id);

  return <CampaignDetails campaign={campaign} loading={loading} />;
}
