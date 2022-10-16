import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
const API = 'api/admin/product';
export default function ProductAdminServices(location) {
  const services = useServices(location);
  const getAll = useCallback((params, onThen) => {
    return services.getServices({
      api: `${API}/`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },
      location,
    });
  }, []);
  const getCount = useCallback((params, onThen) => {
    return services.getServices({
      api: `${API}/count`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },
      location,
    });
  }, []);
  return {getAll, getCount };
}
