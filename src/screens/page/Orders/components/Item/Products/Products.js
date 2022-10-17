import { memo, useCallback, useReducer } from 'react';
import { List } from '@mui/material/';
import { Paging, ViewContent } from '~/components';
import { initCase, initState, reducerState } from './init';
import Provider from './provider';
import ViewItem from './Item';
function Products({ OrderId, loading }) {
  const [state, dispath] = useReducer(reducerState, initState);
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  return (
    <Provider value={{ state, dispath, OrderId }}>
      <ViewContent
        loading={loading || state.isLoading}
        length={state.total}
        empty={'Đơn hàng rỗng!'}
      >
        <List disablePadding>
          {state.data.map(function (data, index) {
            return (
              <ViewItem
                loading={loading || state.isLoading || !Boolean(data)}
                {...data}
                key={index}
              />
            );
          })}
        </List>
        <Paging total={state.total} limit={state.limit} page={state.page} onChange={handleChangePage}/>
      </ViewContent>
    </Provider>
  );
}
export default memo(Products);
