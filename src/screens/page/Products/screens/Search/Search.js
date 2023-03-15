import { memo, useReducer, useState, useEffect } from 'react';

import { ProductServices } from '~/services';
import { initState, reducerState, initCase } from '../../init';
import { useSearchParams } from 'react-router-dom';
import { useInitLoading } from '~/hooks/Loading';
import { useHandleTitle } from '~/hooks/Title';
import ViewLayout from '../../layout';
function BrandProductsPageComponent({ title }) {
  const productServices = ProductServices('Products Search');
  const [searchs] = useSearchParams();
  const [state, dispath] = useReducer(
    reducerState,
    initState({
      limit: searchs.get('limit'),
      page: searchs.get('page'),
      query: searchs.get('query'),
    }),
  );
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleTitle = useHandleTitle();
  useEffect(()=>{
    return handleTitle(title);
  },[])
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    let ourTitle;
    const ourLoading = handleLoading();
    const ourRequestTotal = productServices.getCountBySearch(state.query, (data) => {
      setTotal(data);
      ourLoading();
    });
    return () => {
      ourRequestTotal && ourRequestTotal();
    };
  }, [state.query]);

  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return productServices.getsBySearch(
      state.query,
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
  }, [state.query, state.limit, state.page]);
  return (
    <ViewLayout
      state={state}
      dispath={dispath}
      total={total}
      data={data}
      loading={loading}
    />
  );
}
export default memo(BrandProductsPageComponent);
