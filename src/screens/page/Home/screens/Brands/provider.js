import { memo, createContext, useContext} from 'react';
export const BrandsContext = createContext();
export const useGetBrandsContext = () => {
  return useContext(BrandsContext);
};

function BrandsProvider({ value, children }) {

  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
}
export default memo(BrandsProvider);
