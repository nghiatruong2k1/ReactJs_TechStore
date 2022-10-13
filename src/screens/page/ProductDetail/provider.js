import { memo, createContext, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTitle } from '~/hooks/Title';
import { ProductServices } from '~/services';
import { initCase } from './init';
export const ProductDetailContext = createContext();
export const useGetProductDetailContext = () => {
  return useContext(ProductDetailContext);
};
function ProductDetailProvider({ children, value }) {
  const handleTitle = useGetTitle();
  const { alias } = useParams();
  const productServices = ProductServices('detail product');
  useEffect(() => {
    value.dispath([initCase.SET_DATA]);
    value.dispath([initCase.SET_LOADING, true]);
    let ourTitle;
    const ourRequest = productServices.getByAlias(alias, (data) => {
      ourTitle = handleTitle(data.Name)
      value.dispath([initCase.SET_DATA, data]);
      value.dispath([initCase.SET_LOADING, false]);
    });
    return ()=>{
      ourRequest && ourRequest();
      ourTitle && ourTitle();
    };
  }, [alias]);
  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}
export default memo(ProductDetailProvider);
