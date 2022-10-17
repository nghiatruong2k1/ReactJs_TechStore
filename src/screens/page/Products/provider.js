import { memo, createContext, useContext } from 'react';
export const ProductsContext = createContext();
export const useGetProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsProvider({ children, value: { state, dispath } }) {
  return (
    <ProductsContext.Provider value={{ state, dispath }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default memo(ProductsProvider);
