import { useState, useEffect, useContext } from 'react';
import { campaigns } from '../services';
import AlertContext from '../contexts/Alert';

export function useCampaign(id: number): [Campaign | undefined, boolean] {
  const [data, setData] = useState<Campaign>();
  const [loading, setLoading] = useState(false);
  const alert = useContext(AlertContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await campaigns.get(id);

        setData(res.data);

        setLoading(false);
      } catch (error) {
        alert.setError(error.message);
        setLoading(false);
      }
    }

    setLoading(true);
    fetchData();
  }, [id, alert]);

  return [data, loading];
}
