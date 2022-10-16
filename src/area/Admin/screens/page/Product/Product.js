import { memo, useEffect, useMemo, useReducer } from 'react';
import { AccorCard, Datagrid } from '~/components';
import { Grid } from '@mui/material';
import ProductAdminServices from '~/area/Admin/services/productAdmin';
import { routersAdmin } from '~/config/Router';
import { reducerState, initState, initCase } from './init';
import { productModel } from '~/models/product';
import format from 'number-format.js';
import { formatDate } from '~/config/Format';
function ProductComponent(props) {
  const services = ProductAdminServices('ProductComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  useEffect(() => {
    dispath([initCase.SET_DATA]);
    dispath([initCase.TOGGLE_LOADING,true]);
    return services.getAll(
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
        isTrash: state.inTrash,
      },
      (data) => {
        dispath([initCase.SET_DATA, data]);
        dispath([initCase.TOGGLE_LOADING,false]);
      },
    );
  }, []);
  const displays = useMemo(() => {
    return [
      {
        title: productModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt:'Name',
        type: 'image',
        width:'10em'
      },
      {
        title: productModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
      },
      {
        title: productModel.Price.displayName,
        name: 'Price',
        type: 'number',
        format: (v)=>(format("#,##0.# đ",v)),
        width: '8em'
      },
      {
        title: productModel.SalePrice.displayName,
        name: 'SalePrice',
        type: 'number',
        format: (v)=>(format("#,##0.# đ",v)),
        width: '8em',
      },
      {
        title: productModel.CategoryName.displayName,
        name: 'CategoryName',
        type: 'text',
        width: '10em',
      },
      {
        title: productModel.BrandName.displayName,
        name: 'BrandName',
        type: 'text',
        width: '10em',
      },
      {
        title: productModel.TypeName.displayName,
        name: 'TypeName',
        type: 'text',
        width: '10em',
      },
      {
        title: productModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v)=>(formatDate(v)),
      },
      {
        title: productModel.UpdateDate.displayName,
        name: 'UpdateDate',
        type: 'datetime',
        width: '5em',
        format: (v)=>(formatDate(v)),
      },
    ];
  }, []);
  return (
    <Grid container>
      <AccorCard
        title="Quản lý sản phẩm"
        open={true}
        component={Grid}
        item
        xs={12}
      >
        <Datagrid option={<></>} loading={state.isLoading} datasets={state.data} displays={displays} />
      </AccorCard>
    </Grid>
  );
}
export default memo(ProductComponent);
