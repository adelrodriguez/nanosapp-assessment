import { api } from '../config';

export const campaigns = {
  summary: () => api.get<CampaignSummary[]>('/campaigns-summary'),
  list: () => api.get<Campaign[]>('/campaigns'),
  get: (id: number) => api.get<Campaign>(`/campaigns/${id}`),
};
