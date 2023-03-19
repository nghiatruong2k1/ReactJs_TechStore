import { memo, useReducer, useState, useEffect } from 'react';

import { ProductServices } from '~/services';
import { initState, reducerState, initCase } from '../../init';
import { useParams, useSearchParams } from 'react-router-dom';
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
    }),
  );
  const { query } = useParams();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, []);
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    const ourRequestTotal = productServices.getCountBySearch(query, (data) => {
      setTotal(data);
      ourLoading();
    });
    return () => {
      ourRequestTotal && ourRequestTotal();
    };
  }, [query]);

  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return productServices.getsBySearch(
      query,
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
  }, [query, state.limit, state.page]);
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
