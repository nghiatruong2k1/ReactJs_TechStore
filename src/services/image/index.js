import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/image';
export default function ImageServices(location) {
  const services = useServices(location);
  const getsByProductId = useCallback((Id, onThen) => {
    return services.getServices({
      api: `${API}/product`,
      params: { Id },
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      location,
    });
  }, []);
  return {
    getsByProductId,
  };
}
