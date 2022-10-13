import { memo, useCallback, useReducer,useEffect } from 'react';
import ViewList from '../components/ViewList';
import ViewHead from '../components/ViewHead';
import Provider from './provider';
import { initState, reducerState, initCase } from './init';
import { Paging } from '~/components';
import { useLocation, useSearchParams } from 'react-router-dom';

function LayoutComponent({ handleGetTitle, handleGetData, handleGetTotal }) {
  const [params, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    page: Number(params.get('page')) || 1,
  });
  const handleChange = useCallback(
    (index) => {
      dispath([initCase.SET_PAGE, index]);
    },
    [],
  );
  useEffect(() => {
    setSearchParams({ page: state.page });
  }, [state.page]);
  return (
    <Provider
      value={{ handleGetTitle, handleGetData, handleGetTotal, state, dispath }}
    >
      <ViewHead loading={state.isLoading} total={state.total} />
      <ViewList loading={state.isLoading} data={state.data} />
      <Paging
        total={state.total}
        limit={state.limit}
        page={state.page}
        onChange={handleChange}
      />
    </Provider>
  );
}
export default memo(LayoutComponent);
