import { memo, useEffect, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Paging, ViewContent } from '~/components';
import { useHandleTitle } from '~/hooks/Title';
import { privateRouters } from '~/routers/Private';
import { initCase } from './init';
import Provider from './provider';
import ViewHead from './components/Head';
import ViewStep from './components/Step';
import ViewItem from './components/Item';
function OrdersLayoutComponent({state,dispath,data,loading,total,status}) {
  const [searchs,setSearchParams] = useSearchParams();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(privateRouters.profile.orders.title);
  }, []);
  const handleChangeStatus = useCallback((index) => {
    dispath([initCase.SET_STATUS_INDEX, index]);
  }, []);
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  useEffect(() => {
    setSearchParams(state);
  }, [state]);
  return (
    <Provider value={{ state, dispath }}>
      <ViewStep
        onChange={handleChangeStatus}
        status={status}
        statusIndex={state.statusIndex}
      />
      <ViewHead total={total} loading={loading} />
      <Stack spacing={2}>
        <ViewContent loading={loading} length={total}>
          {Array.isArray(data) &&
            data.map((item, index) => {
              return <ViewItem key={index} {...item} />;
            })}
        </ViewContent>
      </Stack>
      <Paging
        total={total}
        limit={state.limit}
        page={state.page}
        onChange={handleChangePage}
      />
    </Provider>
  );
}
export default memo(OrdersLayoutComponent);
