import { memo, createContext, useContext, useEffect } from 'react';
import BrandServices from '~/services/brand';
import { initCase } from './init';
export const BrandsContext = createContext();
export const useGetBrandsContext = () => {
  return useContext(BrandsContext);
};

function BrandsProvider({ value, children }) {
  const brandServices = BrandServices('home brands');
  useEffect(() => {
    value.dispath([initCase.SET_DATA]);
    value.dispath([initCase.SET_LOADING, true]);
    const ourRequest = brandServices.getAll(
      {},
      (data) => {
        value.dispath([initCase.SET_DATA, data]);
        value.dispath([initCase.SET_LOADING, false]);
      },
    );
    return ourRequest;
  }, []);
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
}
export default memo(BrandsProvider);
