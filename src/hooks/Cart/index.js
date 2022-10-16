import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { LocalStore } from '~/config/LocalStore';
import { initState, initReducerState, initCase } from './init';
import useDialogResult from '../DialogResult';
import useSetReducer from '../SetReducer';

const KEY_STORE = process.env.REACT_APP_WEBSITE_NAME+'-cart';
export function useInitCart() {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    ...initState,
    data: LocalStore.get(KEY_STORE, []),
  });
  const dispath = useSetReducer(setState,initReducerState(enqueueSnackbar))
  useEffect(() => {
    let newCart = [];
    if (Array.isArray(state.data)) {
      newCart = state.data.filter(function (data) {
        return data;
      });
    }
    LocalStore.set(KEY_STORE, newCart);
  }, [state.data]);

  return { state, dispath };
}
export function useGetCart() {
  const {
    cart: { state, dispath },
  } = useGetGlobalStateContext();

  const dialogResult = useDialogResult();
  const remove = useCallback((index) => {
    try {
      dialogResult({
        type: 'warning',
        title: 'Thông báo',
        message: 'Bạn có muốn xóa sản phẩm này?',
        onSuccess: () => {
          dispath([initCase.REMOVE, index]);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const reset = useCallback(() => {
    dispath([initCase.RESET]);
  }, []);
  const totalPrice = useMemo(() => {
    if (Array.isArray(state.data)) {
      return (
        state.data.reduce(function (result, data) {
          if (data) {
            return (result +=
              data.Quantity * (data.SalePrice ?? data.Price ?? 0));
          }
          return result;
        }, 0) ?? 0
      );
    } else {
      return 0;
    }
  }, [state]);
  const total = useMemo(() => {
    if (Array.isArray(state.data)) {
      return (
        state.data.reduce(function (result, data) {
          if (data) {
            return (result += data.Quantity ?? 0);
          }
          return result;
        }, 0) ?? 0
      );
    } else {
      return 0;
    }
  }, [state]);
  return {
    state: { ...state, totalPrice, total },
    handle: { remove, reset },
    dispath,
    initCase,
  };
}
