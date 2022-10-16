import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
const API = 'api/admin/order';
export default function OrderAdminServices(location) {
  const services = useServices(location)
  const getStatistic = useCallback((onThen) => {
    return services.getServices({
      api: `${API}/statistic`,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },location
    });
  }, []);
  const getCount = useCallback((onThen) => {
    return services.getServices({
      api: `${API}/count`,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },location
    });
  }, []);
  return { getStatistic,getCount };
}

