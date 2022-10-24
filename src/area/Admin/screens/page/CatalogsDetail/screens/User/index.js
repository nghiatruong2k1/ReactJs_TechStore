import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { userModel } from '~/models/user';
import { userEntity } from '~/entities/user';
import { useInitLoading } from '~/hooks/Loading';

import UserAdminServices from '~/area/Admin/services/userAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { routersAdmin } from '~/config/Router';

function init() {
  const userAdminService = UserAdminServices(CatalogAddUserPage);
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(userModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(userEntity);
  }, []);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const ourLoading = handleLoading();
    return userAdminService.getTypes(
      { IsTrash: false, isPublic: true },
      (data) => {
        if (data && Array.isArray(data)) {
          setTypes(
            data.map((i) => {
              return {
                value: i.Id,
                text: i.Name,
              };
            }),
          );
        }
      },
      ourLoading,
    );
  }, []);
  return {
    state,
    dispath,
    loading,
    handleLoading,
    rulers,
    types,
    userAdminService,
  };
}
export const CatalogAddUserPage = memo(() => {
  const {
    state,
    dispath,
    loading,
    handleLoading,
    types,
    rulers,
    userAdminService,
  } = init();
  const handleSave = useCallback((data, onEnd) => {
    return userAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(() => {
    dispath([initCase.SET_VALUES, {}]);
  }, []);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={routersAdmin.user.add.title}
      loading={loading}
      datas={{ types }}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateUserPage = memo(() => {
  const {
    state,
    dispath,
    loading,
    handleLoading,
    types,
    rulers,
    userAdminService,
  } = init();
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();

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
          navigator(routersAdmin.user.index.getAction());
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
      title={routersAdmin.user.update.title}
      loading={loading}
      datas={{ types }}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
