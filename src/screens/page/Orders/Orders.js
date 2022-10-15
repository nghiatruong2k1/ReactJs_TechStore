import { memo, useReducer, useEffect, useCallback } from 'react';

import { Stack } from '@mui/material';
import { initCase, initState, reducerState } from './init';
import Provider from './provider';
import ViewHead from './Head';
import ViewStep from './Step';
import ViewItem from './Item';
import { Paging, ViewContent } from '~/components';

import { useHandleTitle } from '~/hooks/Title';
import { useSearchParams } from 'react-router-dom';
function OrdersComponent(props) {
  const [params, setSearchParams] = useSearchParams();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    page: Number(params.get('page')) || 1,
  });
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle('Danh sách đơn hàng');
  }, []);
  const handleChangeStatus = useCallback((index) => {
    dispath([initCase.SET_STATUS_INDEX, index]);
  }, []);
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  useEffect(() => {
    setSearchParams({ page: state.page });
  }, [state.page]);
  return (
    <Provider value={{ state, dispath }}>
      <ViewStep
        onChange={handleChangeStatus}
        status={state.status}
        statusIndex={state.statusIndex}
      />
      <ViewHead total={state.total} loading={state.isLoading} />
      <Stack spacing={2}>
        <ViewContent loading={state.isLoading} length={state.total}>
          {Array.isArray(state.data) &&
            state.data.map((item, index) => {
              return <ViewItem key={index} {...item} />;
            })}
        </ViewContent>
      </Stack>
      <Paging
        total={state.total}
        limit={state.limit}
        page={state.page}
        onChange={handleChangePage}
      />
    </Provider>
  );
}
export default memo(OrdersComponent);
