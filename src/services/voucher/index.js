import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = 'api/ordervoucher';
export default function VoucherServices(location) {
  const services = useServices(location)
  const get = useCallback((Code, onThen,onCatch) => {
    return services.getServices({
      api: API, 
      params: { Code },
      onThen:(data)=>{
        onThen && onThen(data.value);
      },
      onCatch: (e) => {
        onThen && onThen(null);
        onCatch && onCatch(e);
      },location
    });
  }, []);
  return { get };
}

