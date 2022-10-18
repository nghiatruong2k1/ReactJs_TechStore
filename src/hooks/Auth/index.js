import { useCallback, useEffect, useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { useCookies } from 'react-cookie';
import { UserServices } from '~/services';
import { initState, reducerState, initCase } from './init';
import { LocalStore } from '~/config/LocalStore';
import { useInitLoading } from '../Loading';
const KEY_STORE = process.env.REACT_APP_WEBSITE_NAME + '-user';
export function useInitAuth() {
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    user: LocalStore.get(KEY_STORE, {}),
  });
  const [isLoading, handleLoading] = useInitLoading();
  const [cookies] = useCookies(['token']);
  const useServices = UserServices();
  useEffect(() => {
    if (state.isOpen) {
      dispath([initCase.TO_LOGIN]);
    }
  }, [state.isOpen]);
  useEffect(() => {
    LocalStore.set(KEY_STORE, state.user);
  }, [state.user]);
  useEffect(() => {
    if (cookies['token']) {
      const ourLoading = handleLoading();
      const ourRequest = useServices.get({}, (data) => {
        dispath([initCase.SET_USER, data]);
        ourLoading();
      });
      return ourRequest;
    } else {
      dispath([initCase.SET_USER, null]);
      LocalStore.set(KEY_STORE, null);
    }
  }, [cookies['token']]);
  const handleOpen = useCallback(() => {
    dispath([initCase.TOGGLE_OPEN, true]);
  }, []);
  const handleClose = useCallback(() => {
    dispath([initCase.TOGGLE_OPEN, false]);
  }, []);
  return {
    state: { ...state, isLoading },
    dispath,
    handle: { handleLoading, handleOpen, handleClose },
  };
}
export function useGetAuth() {
  const {
    auth: { state, dispath,handle },
  } = useGetGlobalStateContext();
  return {
    state,
    dispath,
    initCase,
    handle
  };
}
