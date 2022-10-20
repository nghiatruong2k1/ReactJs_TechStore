import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/category';
export default function CategoryServices(location) {
  const services = useServices(location)
  const getAll = useCallback((params, onThen, onEnd) => {
    return services({
      api: API,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      }, onEnd,location
    });
  }, []);
  const getByAlias = useCallback((alias, onThen, onEnd) => {
    return services({
      api: `${API}/${alias}`,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      }, onEnd,location
    });
  }, []);
  const getPopular = useCallback((params, onThen, onEnd) => {
    return services({
      api: API+'/popular',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      }, onEnd,location
    });
  }, []);
  return { getAll,getPopular,getByAlias };
}

