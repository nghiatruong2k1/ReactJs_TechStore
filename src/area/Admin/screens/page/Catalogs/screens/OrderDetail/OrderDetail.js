import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {  useParams, useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import formatNumber from 'number-format.js';
import OrderServices from '~/services/order';
import { orderDetailModel } from '~/models/order';
import { routersAdmin } from '~/config/Router';
import { useInitLoading } from '~/hooks/Loading';

import CatalogLayout from '../../layout';
import { reducerState, initState, initCase } from '../../init';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';

function CatalogOrderDetailComponent(props) {
  const services = OrderServices('CatalogOrderDetailComponent');
  const { id } = useParams();
  const [searchs] = useSearchParams();
  const [state, dispath] = useReducer(reducerState, initState({
    limit:searchs.get('limit'),
    page:searchs.get('page'),
    inTrash:searchs.get('inTrash')
  }));
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleFetch = useCallback(
    (onEnd) => {
      let ourRequest;
      dispath([
        initCase.CALLBACK,
        (prev) => {
          ourRequest = services.getsByDetail(
            id,
            {
              offset: (prev.page - 1) * prev.limit,
              limit: prev.limit,
            },
            (data) => {
              setData(data);
            },
            onEnd,
          );
        },
      ]);
      return ourRequest;
    },
    [id],
  );
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return handleFetch(ourLoading);
  }, [id, state.page, state.limit]);
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
  }, [id]);
  const displays = useMemo(() => {
    return [
      {
        title: orderDetailModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '5em',
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
  return (
    <Grid container>
      <CatalogLayout
        title={
          routersAdmin.order.detail.title + (state.inTrash ? ' (thùng rác) ' : '')
        }
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
