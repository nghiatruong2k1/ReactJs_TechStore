import { memo, useCallback, useEffect } from 'react';
import { Paging } from '~/components';
import { useSearchParams } from 'react-router-dom';
import ViewList from './components/ViewList';
import ViewHead from './components/ViewHead';
import Provider from './provider';
import { initCase } from './init';
function LayoutComponent({ total, data, loading, state, dispath }) {
  const [search,setSearchParams] = useSearchParams();
  const handlePageChange = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  useEffect(() => {
    setSearchParams(state);
  }, [state]);
  return (
    <Provider value={{ state, dispath, data, loading }}>
      <ViewHead loading={loading} total={total} />
      <ViewList loading={loading} data={data} />
      <Paging
        total={total}
        limit={state.limit}
        page={state.page}
        onChange={handlePageChange}
      />
    </Provider>
  );
}
export default memo(LayoutComponent);
