import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/product';
export default function ProductServices(location) {
  const services = useServices(location);
  const getsRecommend = useCallback((params, onThen, onEnd) => {
    return services({
      api: API + '/type/2',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      onEnd,
      location,
    });
  }, []);
  const getsDealsOffers = useCallback((params, onThen, onEnd) => {
    return services({
      api: API + '/type/1',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      onEnd,
      location,
    });
  }, []);
  const getByAlias = useCallback((alias, onThen, onEnd) => {
    if (alias) {
      return services({
        api: `${API}/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen({});
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getCountByBrand = useCallback((alias, onThen, onEnd) => {
    if (alias) {
      return services({
        api: `${API}/brand/count/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getsByBrand = useCallback((alias, params, onThen, onEnd) => {
    if (alias) {
      return services({
        api: `${API}/brand/${alias}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getCountByCategory = useCallback((alias, onThen, onEnd) => {
    if (alias) {
      return services({
        api: `${API}/category/count/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getsByCategory = useCallback((alias, params, onThen, onEnd) => {
    if (alias) {
      return services({
        api: `${API}/category/${alias}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getCountBySearch = useCallback((query, onThen, onEnd) => {
    if (query) {
      return services({
        api: `${API}/search/count/${query}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        onEnd,
        location,
      });
    }
  }, []);
  const getsBySearch = useCallback((query, params, onThen, onEnd) => {
    if (query) {
      return services({
        api: `${API}/search/${query}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
        onEnd,
        location,
      });
    }
  }, []);
  return {
    getsRecommend,
    getsDealsOffers,
    getByAlias,
    getsByBrand,
    getCountByBrand,
    getsByCategory,
    getCountByCategory,
    getsBySearch,
    getCountBySearch,
  };
}
