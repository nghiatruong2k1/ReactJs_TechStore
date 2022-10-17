import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import CategoryAdminServices from '~/area/Admin/services/categoryAdmin';
import { categoryModel } from '~/models/category';
import { formatDate } from '~/config/Format';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import { useHandleTitle } from '~/hooks/Title';
import CatalogLayout from '../../layout';

import { reducerState, initState, initCase } from '../../init';
function CatalogCategoryComponent(props) {
  const services = CategoryAdminServices('CatalogCategoryComponent');
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
        title: categoryModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '10em',
      },
      {
        title: categoryModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={getAction(
              routersAdmin.routers.category.update,
              { id: data.Id },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },{
        title:categoryModel.IsPopular.displayName,
        name:'IsPopular',
        type:'checkbox',
        width:'2em'
      },
      {
        title: categoryModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: categoryModel.UpdateDate.displayName,
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
      />
    </Grid>
  );
}
export default memo(CatalogCategoryComponent);
