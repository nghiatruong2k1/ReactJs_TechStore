import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { categoryEntity } from '~/entities/category';
import { categoryModel } from '~/models/category';
import { useInitLoading } from '~/hooks/Loading';

import CategoryAdminServices from '~/area/Admin/services/categoryAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {  routersAdmin } from '~/config/Router';
export const CatalogAddCategoryPage = memo(() => {
  const categoryAdminService = CategoryAdminServices('CatalogAddCategoryPage');
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(categoryModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(categoryEntity);
  }, []);
  const handleSave = useCallback((data, onEnd) => {
    return categoryAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(()=>{
    dispath([initCase.SET_VALUES, {}]);
  },[])
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Thêm danh mục'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateCategoryPage = memo(() => {
  const categoryAdminService = CategoryAdminServices('CatalogUpdateCategoryPage');
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(categoryModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(categoryEntity);
  }, []);
  const { id } = useParams();
  const handleFetch = useCallback(() => {
    const ourLoading = handleLoading();
    return categoryAdminService.getById(
      id,
      (data) => {
        if (data && typeof data === 'object') {
          dispath([initCase.SET_VALUES, data]);
        } else {
          enqueueSnackbar({
            message: 'Danh mục không tồn tại',
            type: 'warning',
          });
          navigator(
            routersAdmin.category.index.getAction(),
          );
        }
      },
      () => {
        ourLoading();
      },
    );
  }, [id]);
  const handleSave = useCallback((data, onEnd) => {
    return categoryAdminService.putData(data, null, onEnd);
  }, []);
  useEffect(() => {
    return handleFetch();
  }, [id]);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Cập nhật danh mục'}
      loading={loading}
      handle={{ handleLoading, handleSave,handleFetch }}
      rulers={rulers}
    />
  );
});
