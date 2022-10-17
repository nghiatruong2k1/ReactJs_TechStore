import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import UserAdminServices from '~/area/Admin/services/userAdmin';
import { userModel } from '~/models/user';
import { formatDate } from '~/config/Format';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import { useHandleTitle } from '~/hooks/Title';
import CatalogLayout from '../../layout';

import { reducerState, initState, initCase } from '../../init';
function CatalogUserComponent(props) {
  const services = UserAdminServices('CatalogUserComponent');
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
        title: userModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Email',
        type: 'image',
        width: '10em',
      },
      {
        title: userModel.Email.displayName,
        name: 'Email',
        type: 'text',
        width: '5em',
        format: (v, data) => <a href={`mailto:${v}`}>{v}</a>,
      },
      {
        title: userModel.FirstName.displayName,
        name: 'FirstName',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.LastName.displayName,
        name: 'LastName',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.Location.displayName,
        name: 'Location',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.Phone.displayName,
        name: 'Phone',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.TypeName.displayName,
        name: 'TypeName',
        type: 'text',
        format: (v, data) => {
          let color = '--info';
          if (data.TypeId === 4) {
            color = '--error';
          } else if (data.TypeId === 3) {
            color = '--success';
          } else if (data.TypeId === 2) {
            color = '--warning';
          }
          return <span style={{ color: `var(${color})` }}>{v}</span>;
        },
        width: '8em',
      },
      {
        title: userModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: userModel.UpdateDate.displayName,
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
export default memo(CatalogUserComponent);
