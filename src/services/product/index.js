import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/product';
export default function ProductServices(location) {
  const services = useServices(location);
  const getsRecommend = useCallback((params, onThen) => {
    return services.getServices({
      api: API + '/type/2',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      location,
    });
  }, []);
  const getsDealsOffers = useCallback((params, onThen) => {
    return services.getServices({
      api: API + '/type/1',
      params,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      location,
    });
  }, []);
  const getByAlias = useCallback((alias, onThen) => {
    if (alias) {
      return services.getServices({
        api: `${API}/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen({});
        },
        location,
      });
    }
  }, []);
  const getCountByBrand = useCallback((alias, onThen) => {
    if (alias) {
      return services.getServices({
        api: `${API}/brand/count/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        location,
      });
    }
  }, []);
  const getsByBrand = useCallback((alias,params, onThen) => {
    if (alias) {
      return services.getServices({
        api: `${API}/brand/${alias}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
        location,
      });
    }
  }, []);
  const getCountByCategory = useCallback((alias, onThen) => {
    if (alias) {
      return services.getServices({
        api: `${API}/category/count/${alias}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        location,
      });
    }
  }, []);
  const getsByCategory = useCallback((alias,params, onThen) => {
    if (alias) {
      return services.getServices({
        api: `${API}/category/${alias}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
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
  };
}
