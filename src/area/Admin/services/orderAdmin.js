import { useCallback } from 'react';
import { Delete, Post, Put } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
const API = 'api/admin/order';
export default function OrderAdminServices(location) {
  const services = useServices(location);
  const getStatistic = useCallback((onThen, onEnd) => {
    return services({
      api: `${API}/statistic`,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      onEnd,
      location,
    });
  }, []);
  const getCount = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}/count`,
      onThen,
      params,
      onCatch: () => {
        onThen && onThen(0);
      },
      onEnd,
      location,
    });
  }, []);
  const getAll = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },
      onEnd,
      location,
    });
  }, []);
  const getDetail = useCallback((id, params, onThen, onEnd) => {
    return services({
      api: `${API}detail/${id}`,
      onThen,
      params,
      onCatch: () => {
        onThen && onThen([]);
      },
      onEnd,
      location,
    });
  }, []);
  const getDetailCount = useCallback((id, params, onThen, onEnd) => {
    return services({
      api: `${API}detail/count/${id}`,
      onThen,
      params,
      onCatch: () => {
        onThen && onThen(0);
      },
      onEnd,
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
  return {
    getStatistic,
    getCount,
    getAll,
    getDetail,
    getDetailCount,
    putData,
    postData,
    deleteData,
  };
}
