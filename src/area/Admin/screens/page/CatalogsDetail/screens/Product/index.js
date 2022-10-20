import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { getDefaultValues, getRulers } from '~/models';
import { productEntity } from '~/entities/product';
import { productModel } from '~/models/product';
import { useInitLoading } from '~/hooks/Loading';

import ProductAdminServices from '~/area/Admin/services/productAdmin';
import CategoryAdminServices from '~/area/Admin/services/categoryAdmin';
import BrandAdminServices from '~/area/Admin/services/brandAdmin';
import { initCase, initState, reducerState } from '../../init';
import Layout from './layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { getAction, routersAdmin } from '~/config/Router';
export const CatalogAddProductPage = memo(() => {
  const productAdminService = ProductAdminServices('CatalogAddProductPage');
  const categoryAdminServices = CategoryAdminServices('CatalogAddProductPage');
  const brandAdminServices = BrandAdminServices('CatalogAddProductPage');
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(productModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(productEntity);
  }, []);
  const handleSave = useCallback((data, onEnd) => {
    return productAdminService.postData(data, null, onEnd);
  }, []);
  const handleFetch = useCallback(() => {
    dispath([initCase.SET_VALUES, {}]);
  }, []);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const ourLoading1 = handleLoading();
    const ourRequest1 = categoryAdminServices.getAll(
      { IsTrash: false, isPublic: true },
      (data) => {
        if (data && Array.isArray(data)) {
          setCategories(
            data.map((i) => {
              return {
                value: i.Id,
                text: i.Name,
              };
            }),
          );
        }
      },
      ourLoading1,
    );
    const ourLoading2 = handleLoading();
    const ourRequest2 = brandAdminServices.getAll(
      { IsTrash: false, isPublic: true },
      (data) => {
        if (data && Array.isArray(data)) {
          setBrands(
            data.map((i) => {
              return {
                value: i.Id,
                text: i.Name,
              };
            }),
          );
        }
      },
      ourLoading1,
    );
    return ()=>{
      ourRequest1 && ourRequest1();
      ourRequest2 && ourRequest2();
    }
  }, []);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Thêm sản phẩm'}
      loading={loading}
      datas={{categories,brands}}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
export const CatalogUpdateProductPage = memo(() => {
  const productAdminService = ProductAdminServices('CatalogAddProductPage');
  const categoryAdminServices = CategoryAdminServices('CatalogAddProductPage');
  const brandAdminServices = BrandAdminServices('CatalogAddProductPage');
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    values: getDefaultValues(productModel),
  });
  const [loading, handleLoading] = useInitLoading();
  const rulers = useMemo(() => {
    return getRulers(productEntity);
  }, []);
  const { id } = useParams();
  const handleFetch = useCallback(() => {
    const ourLoading = handleLoading();
    return productAdminService.getById(
      id,
      (data) => {
        if (data && typeof data === 'object') {
          dispath([initCase.SET_VALUES, data]);
        } else {
          enqueueSnackbar({
            message: 'Sản phẩm không tồn tại',
            type: 'warning',
          });
          navigator(
            getAction(
              routersAdmin.routers.product.index,
              {},
              routersAdmin.area,
            ),
          );
        }
      },
      () => {
        ourLoading();
      },
    );
  }, [id]);
  const handleSave = useCallback((data, onEnd) => {
    return productAdminService.putData(data, null, onEnd);
  }, []);
  useEffect(() => {
    return handleFetch();
  }, [id]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const ourLoading1 = handleLoading();
    const ourRequest1 = categoryAdminServices.getAll(
      { IsTrash: false, isPublic: true },
      (data) => {
        if (data && Array.isArray(data)) {
          setCategories(
            data.map((i) => {
              return {
                value: i.Id,
                text: i.Name,
              };
            }),
          );
        }
      },
      ourLoading1,
    );
    const ourLoading2 = handleLoading();
    const ourRequest2 = brandAdminServices.getAll(
      { IsTrash: false, isPublic: true },
      (data) => {
        if (data && Array.isArray(data)) {
          setBrands(
            data.map((i) => {
              return {
                value: i.Id,
                text: i.Name,
              };
            }),
          );
        }
      },
      ourLoading1,
    );
    return ()=>{
      ourRequest1 && ourRequest1();
      ourRequest2 && ourRequest2();
    }
  }, []);
  return (
    <Layout
      state={state}
      dispath={dispath}
      title={'Cập nhật sản phẩm'}
      loading={loading}
      datas={{categories,brands}}
      handle={{ handleLoading, handleSave, handleFetch }}
      rulers={rulers}
    />
  );
});
