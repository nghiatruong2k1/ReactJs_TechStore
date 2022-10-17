import { memo, useEffect, useReducer, useState } from 'react';

import { CategoryServices } from '~/services';
import { useInitLoading } from '~/hooks/Loading';
import { initState, reducerState } from '../../init';
import ViewLayout from '../../layout';
function CategoryComponent(props) {
  const categoryServices = CategoryServices('list category');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState([]);
  useEffect(() => {
    const ourLoading = handleLoading();
    setData(Array(state.limit).fill(null));
    return categoryServices.getAll({}, (data) => {
      setData(data);
      ourLoading();
    });
  }, [state.limit]);
  return (
    <ViewLayout
      title={'Danh mục'}
      loading={loading}
      data={data}
      controller="category"
    />
  );
}
export default memo(CategoryComponent);
