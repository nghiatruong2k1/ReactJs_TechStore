import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '../DefaultServices';

const API = 'api/user';
export default function UserServices(location) {
  const services = useServices(location);
  const get = useCallback((params, onThen, onEnd) => {
    return services({
      api: API,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(null);
      },
      onEnd,
      location,
    });
  }, []);
  return { get };
}
