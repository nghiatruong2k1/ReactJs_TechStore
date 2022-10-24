import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { orderEntity } from '~/entities/order';
import { orderModel } from '~/models/order';
import { useInitLoading } from '~/hooks/Loading';

import OrderAdminServices from '~/area/Admin/services/orderAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { routersAdmin } from '~/config/Router';

function init() {
  const orderAdminService = OrderAdminServices('CatalogAddOrderPage');
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(orderModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(orderEntity);
  }, []);
  const [status, setStatus] = useState([]);
  useEffect(() => {
    const ourLoading = handleLoading();
    return orderAdminService.getsStatus((data) => {
      if (data && Array.isArray(data)) {
        setStatus(
          data.map((i) => {
            return {
              value: i.Id,
              text: i.Name,
            };
          }),
        );
      }
    }, ourLoading);
  }, []);
  return {
    state,
    dispath,
    loading,
    handleLoading,
    rulers,
    status,
    orderAdminService,
  };
}
export const CatalogAddOrderPage = memo(() => {
  const {
    state,
    dispath,
    loading,
    handleLoading,
    rulers,
    status,
    orderAdminService,
  } = init();

  const handleSave = useCallback((data, onEnd) => {
    return orderAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(() => {
    dispath([initCase.SET_VALUES, {}]);
  }, []);

  return (
    <Layout
      state={state}
      dispath={dispath}
      title={routersAdmin.order.add.title}
      loading={loading}
      datas={{ status }}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateOrderPage = memo(() => {
  const {
    state,
    dispath,
    loading,
    handleLoading,
    rulers,
    status,
    orderAdminService,
  } = init();
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const { id } = useParams();
  const handleFetch = useCallback(() => {
    const ourLoading = handleLoading();
    return orderAdminService.getById(
      id,
      (data) => {
        if (data && typeof data === 'object') {
          dispath([initCase.SET_VALUES, data]);
        } else {
          enqueueSnackbar({
            message: 'Đơn hàng không tồn tại',
            type: 'warning',
          });
          navigator(routersAdmin.order.index.getAction());
        }
      },
      ourLoading,
    );
  }, [id]);
  const handleSave = useCallback((data, onEnd) => {
    return orderAdminService.putData(data, null, onEnd);
  }, []);
  useEffect(() => {
    return handleFetch();
  }, [id]);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={routersAdmin.order.update.title}
      loading={loading}
      datas={{ status }}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
