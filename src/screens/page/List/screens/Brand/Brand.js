import { memo, useEffect, useReducer, useState } from 'react';

import { BrandServices } from '~/services';
import { useInitLoading } from '~/hooks/Loading';
import { initState, reducerState } from '../../init';
import ViewLayout from '../../layout';
function BrandComponent() {
  const brandServices = BrandServices('list brand');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(initState.limit).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = brandServices.getAll({}, (data) => {
      setData(data);
      ourLoading();
    });
    return () => {
      setData(Array(state.limit).fill(null));
      ourRequest();
    };
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
