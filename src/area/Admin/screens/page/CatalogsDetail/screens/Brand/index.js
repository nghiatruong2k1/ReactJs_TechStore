import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { brandEntity } from '~/entities/brand';
import { brandModel } from '~/models/brand';
import { useInitLoading } from '~/hooks/Loading';

import BrandAdminServices from '~/area/Admin/services/brandAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { routersAdmin } from '~/config/Router';
export const CatalogAddBrandPage = memo(() => {
  const brandAdminService = BrandAdminServices('CatalogAddBrandPage');
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(brandModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(brandEntity);
  }, []);
  const handleSave = useCallback((data, onEnd) => {
    return brandAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(()=>{
    dispath([initCase.SET_VALUES, {}]);
  },[])
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Thêm thương hiệu'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateBrandPage = memo(() => {
  const brandAdminService = BrandAdminServices('CatalogUpdateBrandPage');
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(brandModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(brandEntity);
  }, []);
  const { id } = useParams();
  const handleFetch = useCallback(() => {
    const ourLoading = handleLoading();
    return brandAdminService.getById(
      id,
      (data) => {
        if (data && typeof data === 'object') {
          dispath([initCase.SET_VALUES, data]);
        } else {
          enqueueSnackbar({
            message: 'Thương hiệu không tồn tại',
            type: 'warning',
          });
          navigator(
            routersAdmin.brand.index.getAction(),
          );
        }
      },
      () => {
        ourLoading();
      },
    );
  }, [id]);
  const handleSave = useCallback((data, onEnd) => {
    return brandAdminService.putData(data, null, onEnd);
  }, []);
  useEffect(() => {
    return handleFetch();
  }, [id]);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Cập nhật thương hiệu'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
