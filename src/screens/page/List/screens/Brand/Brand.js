import { memo, useEffect, useReducer, useState } from 'react';

import { BrandServices } from '~/services';
import { useInitLoading } from '~/hooks/Loading';
import { initState, reducerState } from '../../init';
import ViewLayout from '../../layout';
function BrandComponent() {
  const brandServices = BrandServices('list brand');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState([]);
  useEffect(() => {
    const ourLoading = handleLoading();
    setData(Array(state.limit).fill(null));
    return brandServices.getAll({}, (data) => {
      setData(data);
      ourLoading();
    });
  }, [state.limit]);
  return (
    <ViewLayout
      title={'Thương hiệu'}
      loading={loading}
      data={data}
      controller="brand"
    />
  );
}
export default memo(BrandComponent);
