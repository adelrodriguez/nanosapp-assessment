import { useState, useEffect, useContext } from 'react';
import { campaigns } from '../services';
import AlertContext from '../contexts/Alert';

export function useCampaignSummaries(): [CampaignSummary[], boolean] {
  const [data, setData] = useState<CampaignSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const alert = useContext(AlertContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await campaigns.summary();

        setData(res.data);

        setLoading(false);
      } catch (error) {
        alert.setError(error.message);
        setLoading(false);
      }
    }

    setLoading(true);
    fetchData();
  }, [alert]);

  return [data, loading];
}
