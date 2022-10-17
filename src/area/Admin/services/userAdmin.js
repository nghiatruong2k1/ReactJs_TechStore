import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
const API = 'api/admin/user';
export default function UserAdminServices(location) {
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
  const getCount = useCallback((params,onThen) => {
    return services.getServices({
      api: `${API}/count`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },location
    });
  }, []);
  const getAll = useCallback((params,onThen) => {
    return services.getServices({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },location
    });
  }, []);
  return { getStatistic,getCount,getAll };
}

