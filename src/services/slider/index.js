import { useCallback } from 'react';
import useServices from '../DefaultServices';

const API = '/api/slider';
export default function SliderServices(location) {
  const services = useServices(location);
  const getAll = useCallback((params, onThen, onEnd) => {
    // return services({
    //   api: API,
    //   params,
    //   onThen,
    //   onCatch: () => {
    //     onThen && onThen([]);
    //   },location
    // });
    onThen &&
      onThen([
        {
          ImageUrl: '/images/banners/slide1.png',
        },
        {
          ImageUrl: '/images/banners/slide2.png',
        },
        {
          ImageUrl: '/images/banners/slide1.png',
        },
        {
          ImageUrl: '/images/banners/slide2.png',
        },
        {
          ImageUrl: '/images/banners/slide1.png',
        },
        {
          ImageUrl: '/images/banners/slide2.png',
        },
      ]);
    onEnd && onEnd();
    return ()=>{}
  }, []);
  return { getAll };
}
