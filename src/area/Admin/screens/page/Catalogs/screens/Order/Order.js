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
import { getAction, routersAdmin } from '~/config/Router';

import CatalogLayout from '../../layout';
import { reducerState, initState, initCase } from '../../init';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';
function CatalogOrderComponent(props) {
  const services = OrderAdminServices('CatalogOrderComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleGetData = useCallback((onEnd) => {
    let ourRequest;
    dispath([
      initCase.CALLBACK,
      (prev) => {
        console.log(prev);
        ourRequest = services.getAll(
          {
            offset: (prev.page - 1) * prev.limit,
            limit: prev.limit,
            isTrash: prev.inTrash,
          },
          (data) => {
            setData(data);
          },
          onEnd,
        );
      },
    ]);
    return ourRequest;
  }, []);
  const handleGetTotal = useCallback((onEnd) => {
    let ourRequest;
    dispath([
      initCase.CALLBACK,
      (prev) => {
        ourRequest = services.getCount(
          { isTrash: prev.inTrash },
          (data) => {
            setTotal(data);
          },
          onEnd,
        );
      },
    ]);
    return ourRequest;
  }, []);
  const handleFetch = useCallback((onEnd) => {
    const fetchData = handleGetData();
    const fetchTotal = handleGetTotal();
    onEnd && onEnd();
    return () => {
      fetchData && fetchData();
      fetchTotal && fetchTotal();
    };
  }, []);

  const handleUpdate = useCallback((data, onEnd) => {
    return services.putData(
      data,
      (data) => {
        if (data?.value !== false) {
          handleFetch();
        }
      },
      onEnd,
    );
  }, []);
  const handleDelete = useCallback((id, onEnd) => {
    return services.deleteData(
      id,
      (data) => {
        if (data?.value !== false) {
          handleFetch();
        }
      },
      onEnd,
    );
  }, []);

  const displays = useMemo(() => {
    return [
      {
        title: orderModel.Id.displayName,
        name: 'Id',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.order.update,
              { id: v },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
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
      },{
        title: 'Chi tiết',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.order.detail,
              { id: data.Id },
              routersAdmin.area,
            )}
          >
            {'Xem chi tiết'}
          </Link>
        ),
      },
      {
        title: '',
        type: 'option',
        width: '5em',
        format: (data) => (
          <>
            <PublicButton
              isPublic={data.IsPublic}
              onClick={(onEnd) => {
                data.IsPublic = !data.IsPublic;
                handleUpdate(data, onEnd);
              }}
            />
            <DeleteButton
              isTrash={data.IsTrash}
              onDelete={(onEnd) => {
                handleDelete(data.Id, onEnd);
              }}
              onClick={(onEnd) => {
                handleUpdate(
                  {
                    ...data,
                    IsTrash: !data.IsTrash,
                  },
                  onEnd,
                );
              }}
            />
          </>
        ),
      },
    ];
  }, []);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return handleGetData(ourLoading);
  }, [state.inTrash, state.page, state.limit]);

  useEffect(() => {
    setTotal(1);
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    return handleGetTotal(ourLoading);
  }, [state.inTrash]);
  return (
    <Grid container>
      <CatalogLayout
        title={'Quản lí đơn hàng' + (state.inTrash ? ' (thùng rác) ' : '')}
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        option={{
          trash:{},
        }}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogOrderComponent);
