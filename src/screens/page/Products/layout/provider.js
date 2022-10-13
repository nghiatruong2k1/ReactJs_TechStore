import { memo, createContext, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTitle } from '~/hooks/Title';
import { initCase } from './init';
export const ProductsContext = createContext();
export const useGetProductsContext = () => {
  return useContext(ProductsContext);
};

function ProductsProvider({
  children,
  value: {  handleGetTitle, handleGetData, handleGetTotal, state, dispath }
}) {
  const { alias } = useParams();
  const handleTitle = useGetTitle();
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    let ourTitle;
    const ourRequestTitle = handleGetTitle(alias,(data) => {
      ourTitle = handleTitle(data.Name);
    });
    const ourRequestTotal = handleGetTotal(alias, (data) => {
      dispath([initCase.SET_TOTAL, data]);
    });
    return () => {
      ourRequestTitle && ourRequestTitle();
      ourTitle && ourTitle();
      ourRequestTotal && ourRequestTotal();
    };
  }, [alias]);
  useEffect(() => {
    dispath([initCase.SET_DATA]);
    return handleGetData(
      alias,
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
      },
      (data) => {
        dispath([initCase.SET_DATA, data]);
      },
    );
  }, [alias, state.limit, state.page]);
  return (
    <ProductsContext.Provider value={{ state, dispath }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default memo(ProductsProvider);
