import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import formatNumber from 'number-format.js';
import OrderAdminServices from '~/area/Admin/services/orderAdmin';
import { orderModel } from '~/models/order';

import { formatDate } from '~/config/Format';

import { useInitLoading } from '~/hooks/Loading';
import { useHandleTitle } from '~/hooks/Title';
import { getAction, routersAdmin } from '~/config/Router';

import CatalogLayout from '../../layout';
import { reducerState, initState, initCase } from '../../init';

function CatalogOrderComponent(props) {
  const services = OrderAdminServices('CatalogOrderComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return services.getAll(
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
        isTrash: state.inTrash,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
  }, [state.inTrash, state.page, state.limit]);
  useEffect(() => {
    setTotal(1);
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    return services.getCount({ isTrash: state.inTrash }, (data) => {
      setTotal(data);
      ourLoading();
    });
  }, [state.inTrash]);
  const displays = useMemo(() => {
    return [
      {
        title: orderModel.Id.displayName,
        name: 'Id',
        type: 'text',
        width: '5em',
        format: (v, data) => <Link to={getAction(routersAdmin.routers.order.detail,{id:v},routersAdmin.area)}>{v}</Link>,
      },
      {
        title: orderModel.Email.displayName,
        name: 'Email',
        type: 'text',
        width: '5em',
        format: (v, data) => <a href={`mailto:${v}`}>{v}</a>,
      },
      {
        title: orderModel.FirstName.displayName,
        name: 'FirstName',
        type: 'text',
        width: '5em',
      },
      {
        title: orderModel.LastName.displayName,
        name: 'LastName',
        type: 'text',
        width: '5em',
      },
      {
        title: orderModel.Location.displayName,
        name: 'Location',
        type: 'text',
        width: '5em',
      },
      {
        title: orderModel.Phone.displayName,
        name: 'Phone',
        type: 'text',
        width: '5em',
      },
      {
        title: orderModel.TotalPrice.displayName,
        name: 'TotalPrice',
        type: 'number',
        format: (v) => formatNumber('#,##0.# đ', v),
        width: '8em',
      },
      {
        title: orderModel.VoucherSale.displayName,
        name: 'VoucherSale',
        type: 'number',
        format: (v) => formatNumber('#,##0.# %', v),
        width: '5em',
      },
      {
        title: orderModel.StatusName.displayName,
        name: 'StatusName',
        type: 'text',
        format: (v, data) => {
          let color = '--info';
          if (data.StatusId === 4) {
            color = '--error';
          } else if (data.StatusId === 3) {
            color = '--success';
          } else if (data.StatusId === 2) {
            color = '--warning';
          }
          return <span style={{ color: `var(${color})` }}>{v}</span>;
        },
        width: '8em',
      },
      {
        title: orderModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: orderModel.UpdateDate.displayName,
        name: 'UpdateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
    ];
  }, []);
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  const handleChangeTrash = useCallback(() => {
    dispath([initCase.TOGGLE_TRASH]);
  }, []);
  return (
    <Grid container>
      <CatalogLayout
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogOrderComponent);
