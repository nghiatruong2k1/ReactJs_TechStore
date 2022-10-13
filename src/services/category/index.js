import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/category';
export default function CategoryServices(location) {
  const services = useServices(location)
  const getAll = useCallback((params, onThen) => {
    return services.getServices({
      api: API,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },location
    });
  }, []);
  const getByAlias = useCallback((alias, onThen) => {
    return services.getServices({
      api: `${API}/${alias}`,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },location
    });
  }, []);
  const getPopular = useCallback((params, onThen) => {
    return services.getServices({
      api: API+'/popular',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },location
    });
  }, []);
  return { getAll,getPopular,getByAlias };
}

