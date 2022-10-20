import { useCallback } from 'react';
import { Post } from '~/utils/HttpRequest';
import useServices from '../DefaultServices';

const API = 'api/order';
export default function OrderServices(location) {
  const services = useServices(location)
  const postOrder = useCallback(({Products,Voucher}, onThen,onCatch, onEnd) => {
    return services({
      api: API, 
      method:Post,
      params: { Products,Voucher },
      onThen:(data)=>{
        onThen && onThen(data.value);
      },
      onCatch: (e) => {
        onCatch && onCatch(e);
      }, onEnd,location
    });
  }, []);
  const getAll = useCallback(({StatusId,limit,offset}, onThen, onEnd) => {
    if(StatusId){
      return services({
        api: API,
        params:{StatusId,limit,offset},
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        }, onEnd,location
      });
    }
  }, []);
  const getsStatus = useCallback(( onThen, onEnd) => {
    return services({
      api: `${API}status`,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      }, onEnd,location
    });
  }, []);
  const getCount = useCallback(({StatusId}, onThen, onEnd) => {
    if (StatusId) {
      return services({
        api: `${API}/count`,
        params:{StatusId},
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        }, onEnd,
        location,
      });
    }
  }, []);

  const getCountByDetail = useCallback((orderId, onThen, onEnd) => {
    if (orderId) {
      return services({
        api: `${API}detail/count/${orderId}`,
        onThen,
        onCatch: () => {
          onThen && onThen(0);
        }, onEnd,
        location,
      });
    }
  }, []);
  const getsByDetail = useCallback((orderId,params, onThen, onEnd) => {
    if (orderId) {
      return services({
        api: `${API}detail/${orderId}`,
        params,
        onThen,
        onCatch: () => {
          onThen && onThen([]);
        }, onEnd,
        location,
      });
    }
  }, []);
  return { postOrder , getAll,getCount,getsStatus,getCountByDetail,getsByDetail};
}

