import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import formatNumber from 'number-format.js';
import OrderServices from '~/services/order';
import { orderDetailModel } from '~/models/order';

import { useInitLoading } from '~/hooks/Loading';

import CatalogLayout from '../../layout';
import { reducerState, initState, initCase } from '../../init';

function CatalogOrderDetailComponent(props) {
  const services = OrderServices('CatalogOrderDetailComponent');
  const { id } = useParams();
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  useEffect(() => {
    if (Number(id) > 0) {
      setData(Array(state.limit).fill(null));
      const ourLoading = handleLoading();
      return services.getsByDetail(
        id,
        {
          offset: (state.page - 1) * state.limit,
          limit: state.limit,
        },
        (data) => {
          setData(data);
          ourLoading();
        },
      );
    } else {
      setData([]);
    }
  }, [id, state.page, state.limit]);
  useEffect(() => {
    if (Number(id) > 0) {
      setTotal(1);
      dispath([initCase.SET_PAGE]);
      const ourLoading = handleLoading();
      return services.getCountByDetail(id, (data) => {
        setTotal(data);
        ourLoading();
      });
    } else {
      setTotal(0);
    }
  }, []);
  const displays = useMemo(() => {
    return [
      {
        title: orderDetailModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '10em',
      },
      {
        title: orderDetailModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '10em',
      },
      {
        title: orderDetailModel.CategoryName.displayName,
        name: 'CategoryName',
        type: 'text',
        width: '10em',
      },
      {
        title: orderDetailModel.BrandName.displayName,
        name: 'BrandName',
        type: 'text',
        width: '10em',
      },
      {
        title: orderDetailModel.TypeName.displayName,
        name: 'TypeName',
        type: 'text',
        width: '10em',
      },
      {
        title: orderDetailModel.Price.displayName,
        name: 'Price',
        type: 'number',
        format: (v) => formatNumber('#,##0.# đ', v),
        width: '8em',
      },
      {
        title: orderDetailModel.Quantity.displayName,
        name: 'Quantity',
        type: 'number',
        format: (v) => formatNumber('#,##0.#', v),
        width: '8em',
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
        title={'Quản lí chi tiết đơn hàng'+ (state.inTrash ? ' (thùng rác) ' : '')}
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
export default memo(CatalogOrderDetailComponent);
