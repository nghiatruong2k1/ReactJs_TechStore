import { memo, useEffect, useReducer, useState } from 'react';

import { CategoryServices } from '~/services';
import { useInitLoading } from '~/hooks/Loading';
import { initState, reducerState } from '../../init';
import ViewLayout from '../../layout';
function CategoryComponent({title}) {
  const categoryServices = CategoryServices('list category');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(initState.limit).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = categoryServices.getAll({}, (data) => {
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
      title={title}
      loading={loading}
      data={data}
      controller="category"
    />
  );
}
export default memo(CategoryComponent);
