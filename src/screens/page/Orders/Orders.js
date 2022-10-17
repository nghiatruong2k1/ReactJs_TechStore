import { memo, useReducer, useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { OrderServices } from '~/services';
import { useInitLoading } from '~/hooks/Loading';
import { initState, reducerState, initCase } from './init';
import ViewLayout from './layout';
function OrdersComponent(props) {
  const [searchs] = useSearchParams();
  const [state, dispath] = useReducer(
    reducerState,
    initState({
      limit: searchs.get('limit'),
      page: searchs.get('page'),
      statusIndex: searchs.get('statusIndex'),
    }),
  );
  const orderServices = OrderServices('Orders page');
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState([]);
  const [loading, handleLoading] = useInitLoading();
  useEffect(() => {
    setStatus(Array(4).fill({}));
    dispath([initCase.SET_STATUS_INDEX]);
    const ourLoading = handleLoading();
    const ourRequest = orderServices.getsStatus((data) => {
      setStatus(data);
      ourLoading();
    });
    return ourRequest;
  }, []);
  const statusId = useMemo(() => {
    return status[state.statusIndex]?.Id || -1;
  }, [status, state.statusIndex]);
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    const ourRequest = orderServices.getCount(
      { StatusId: statusId },
      (data) => {
        setTotal(data);
        ourLoading();
      },
    );
    return ourRequest;
  }, [state.limit, statusId]);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    const ourRequest = orderServices.getAll(
      {
        StatusId: statusId,
        limit: state.limit,
        offset: (state.page - 1) * state.limit,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
    return ourRequest;
  }, [state.page, state.limit, statusId]);
  return (
    <ViewLayout
      state={state}
      dispath={dispath}
      loading={loading}
      data={data}
      total={total}
      status={status}
    />
  );
}
export default memo(OrdersComponent);
