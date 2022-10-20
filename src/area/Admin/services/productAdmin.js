import { useCallback } from 'react';
import { Delete, Post, Put } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
const API = 'api/admin/product';
export default function ProductAdminServices(location) {
  const services = useServices(location);
  const getAll = useCallback((params, onThen,onEnd) => {
    return services({
      api: `${API}/`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },onEnd,
      location,
    });
  }, []);
  const getCount = useCallback((params, onThen,onEnd) => {
    return services({
      api: `${API}/count`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },onEnd,
      location,
    });
  }, []);
  const putData = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },
      onEnd,
      method: Put,
      location,
    });
  }, []);
  const postData = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },
      onEnd,
      method: Post,
      location,
    });
  }, []);
  const deleteData = useCallback((id, onThen, onEnd) => {
    return services({
      api: `${API}/${id}`,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },
      onEnd,
      method: Delete,
      location,
    });
  }, []);
  const getById = useCallback((id, onThen, onEnd) => {
    return services({
      api: `${API}/${id}`,
      onThen,
      onCatch: () => {
        onThen && onThen(null);
      },
      onEnd,
      location,
    });
  }, []);
  return { getAll, getCount,putData ,postData,deleteData,getById};
}
