import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { AccorCard, Datagrid, Paging } from '~/components';
import { Grid } from '@mui/material';
import ProductAdminServices from '~/area/Admin/services/productAdmin';
import { reducerState, initState, initCase } from './init';
import { productModel } from '~/models/product';
import format from 'number-format.js';
import { formatDate } from '~/config/Format';
import AddButton from './AddButton';
import TrashButton from './TrashButton';
import EditButton from './EditButton';
import PublicButton from './PublicButton';
import DeleteButton from './DeleteButton';
function ProductComponent(props) {
  const services = ProductAdminServices('ProductComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  useEffect(() => {
    dispath([initCase.SET_DATA]);
    dispath([initCase.TOGGLE_LOADING, true]);
    return services.getAll(
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
        isTrash: state.inTrash,
      },
      (data) => {
        dispath([initCase.SET_DATA, data]);
        dispath([initCase.TOGGLE_LOADING, false]);
      },
    );
  }, [state.inTrash, state.page, state.limit]);
  useEffect(() => {
    dispath([initCase.SET_TOTAL]);
    dispath([initCase.SET_PAGE]);
    return services.getCount({ isTrash: state.inTrash }, (data) => {
      dispath([initCase.SET_TOTAL, data]);
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
      },
      {
        title: productModel.Price.displayName,
        name: 'Price',
        type: 'number',
        format: (v) => format('#,##0.# đ', v),
        width: '8em',
      },
      {
        title: productModel.SalePrice.displayName,
        name: 'SalePrice',
        type: 'number',
        format: (v) => format('#,##0.# đ', v),
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
      <AccorCard
        title={'Quản lý sản phẩm' + (state.inTrash ? ' ( thùng rác )' : '')}
        open={true}
        component={Grid}
        item
        xs={12}
      >
        <Datagrid
          option={
            <>
              <AddButton />
              <TrashButton
                onClick={handleChangeTrash}
                loading={state.isLoading}
                inTrash={state.inTrash}
              />
            </>
          }
          loading={state.isLoading}
          datasets={state.data}
          displays={displays}
          optionData={{
            title: 'Tùy chọn',
            content: (data) => (
              <>
                <PublicButton isPublic={data.IsPublic}/>
                <DeleteButton isTrash={data.IsTrash}/>
                <EditButton id={data.Id} />
              </>
            ),
          }}
          footer={
            <Paging
              total={state.total}
              limit={state.limit}
              page={state.page}
              onChange={handleChangePage}
              disabled={state.isLoading}
            />
          }
        />
      </AccorCard>
    </Grid>
  );
}
export default memo(ProductComponent);
