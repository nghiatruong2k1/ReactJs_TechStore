import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { userModel } from '~/models/user';
import { userEntity } from '~/entities/user';
import { useInitLoading } from '~/hooks/Loading';

import UserAdminServices from '~/area/Admin/services/userAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { getAction, routersAdmin } from '~/config/Router';
export const CatalogAddUserPage = memo(() => {
  const userAdminService = UserAdminServices(CatalogAddUserPage);
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(userModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(userEntity);
  }, []);
  const handleSave = useCallback((data, onEnd) => {
    return userAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(()=>{
    dispath([initCase.SET_VALUES, {}]);
  },[])
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Thêm tài khoản'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateUserPage = memo(() => {
  const userAdminService = UserAdminServices(CatalogAddUserPage);
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(userModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(userEntity);
  }, []);
  const { id } = useParams();
  const handleFetch = useCallback(() => {
    const ourLoading = handleLoading();
    return userAdminService.getById(
      id,
      (data) => {
        if (data && typeof data === 'object') {
          dispath([initCase.SET_VALUES, data]);
        } else {
          enqueueSnackbar({
            message: 'Tài khoản không tồn tại',
            type: 'warning',
          });
          navigator(
            getAction(routersAdmin.routers.user.index, {}, routersAdmin.area),
          );
        }
      },
      () => {
        ourLoading();
      },
    );
  }, [id]);
  const handleSave = useCallback((data, onEnd) => {
    return userAdminService.putData(data, null, onEnd);
  }, []);
  useEffect(() => {
    return handleFetch();
  }, [id]);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Cập nhật tài khoản'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
