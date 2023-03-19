import { memo, useReducer, useState, useEffect } from 'react';
import ViewLayout from '../../layout';
import { BrandServices, ProductServices } from '~/services';
import { initState, reducerState, initCase } from '../../init';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useInitLoading } from '~/hooks/Loading';
import { useHandleTitle } from '~/hooks/Title';
function BrandProductsPageComponent({ title }) {
  const brandServices = BrandServices('products Brand');
  const productServices = ProductServices('products Brand');
  const [searchs] = useSearchParams();
  const [state, dispath] = useReducer(
    reducerState,
    initState({
      limit: searchs.get('limit'),
      page: searchs.get('page'),
    }),
  );
  const { alias } = useParams();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    let ourTitle;
    const ourLoading1 = handleLoading();
    const ourLoading2 = handleLoading();
    const ourRequestTitle = brandServices.getByAlias(alias, (data) => {
      ourTitle = handleTitle(data.Name || title);
      ourLoading1();
    });
    const ourRequestTotal = productServices.getCountByBrand(alias, (data) => {
      setTotal(data);
      ourLoading2();
    });
    return () => {
      ourRequestTitle && ourRequestTitle();
      ourRequestTotal && ourRequestTotal();
      ourTitle && ourTitle();
    };
  }, [alias]);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return productServices.getsByBrand(
      alias,
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
  }, [alias, state.limit, state.page]);
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
