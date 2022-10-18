import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import BrandAdminServices from '~/area/Admin/services/brandAdmin';
import { brandModel } from '~/models/brand';
import { formatDate } from '~/config/Format';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import CatalogLayout from '../../layout';

import { reducerState, initState, initCase } from '../../init';
function CatalogBrandComponent(props) {
  const services = BrandAdminServices('CatalogBrandComponent');
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
        title: brandModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '10em',
      },
      {
        title: brandModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.brand.update,
              { id: data.Id },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },{
        title:brandModel.IsPopular.displayName,
        name:'IsPopular',
        type:'checkbox',
        width:'2em'
      },
      {
        title: brandModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: brandModel.UpdateDate.displayName,
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
        title={'Quản lí thương hiệu'+ (state.inTrash ? ' (thùng rác) ' : '')}
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
export default memo(CatalogBrandComponent);
