import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import ProductAdminServices from '~/area/Admin/services/productAdmin';
import { productModel } from '~/models/product';
import formatNumber from 'number-format.js';
import { formatDate } from '~/config/Format';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import CatalogLayout from '../../layout';

import { reducerState, initState, initCase } from '../../init';
function CatalogProductComponent(props) {
  const services = ProductAdminServices('CatalogProductComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
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
        title: productModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '10em',
      },
      {
        title: productModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.product.update,
              { id: data.Id },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },
      {
        title: productModel.CategoryName.displayName,
        name: 'CategoryName',
        type: 'text',
        width: '10em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.category.update,
              { id: data.CategoryId },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },
      {
        title: productModel.BrandName.displayName,
        name: 'BrandName',
        type: 'text',
        width: '10em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.brand.update,
              { id: data.BrandId },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },
      {
        title: productModel.TypeName.displayName,
        name: 'TypeName',
        type: 'text',
        width: '10em',
      },
      {
        title: productModel.Price.displayName,
        name: 'Price',
        type: 'number',
        format: (v) => formatNumber('#,##0.# đ', v),
        width: '8em',
      },
      {
        title: productModel.SalePrice.displayName,
        name: 'SalePrice',
        type: 'number',
        format: (v) => formatNumber('#,##0.# đ', v),
        width: '8em',
      },
      {
        title: productModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: productModel.UpdateDate.displayName,
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
      title={'Quản lí sản phẩm'+ (state.inTrash ? ' (thùng rác) ' : '')}
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
export default memo(CatalogProductComponent);
