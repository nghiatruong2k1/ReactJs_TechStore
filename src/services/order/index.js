import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '../DefaultServices';

const API = 'api/order';
export default function OrderServices(location) {
  const services = useServices(location)
  const postOrder = useCallback(({Products,Voucher}, onThen,onCatch) => {
    return services.getServices({
      api: API, 
      method:Post,
      params: { Products,Voucher },
      onThen:(data)=>{
        onThen && onThen(data.value);
      },
      onCatch: (e) => {
        onCatch && onCatch(e);
      },location
    });
  }, []);
  const getAll = useCallback(({StatusId,limit,offset}, onThen) => {
    if(StatusId){
      return services.getServices({
        api: API,
        params:{StatusId,limit,offset},
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },location
      });
    }
  }, []);
  const getsStatus = useCallback(( onThen) => {
    return services.getServices({
      api: `${API}status`,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },location
    });
  }, []);
  const getCount = useCallback(({StatusId}, onThen) => {
    if (StatusId) {
      return services.getServices({
        api: `${API}/count`,
        params:{StatusId},
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        location,
      });
    }
  }, []);

  const getCountByDetail = useCallback((orderId, onThen) => {
    if (orderId) {
      return services.getServices({
        api: `${API}detail/count/${orderId}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        },
        location,
      });
    }
  }, []);
  const getsByDetail = useCallback((orderId,params, onThen) => {
    if (orderId) {
      return services.getServices({
        api: `${API}detail/${orderId}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        },
        location,
      });
    }
  }, []);
  return { postOrder , getAll,getCount,getsStatus,getCountByDetail,getsByDetail};
}

