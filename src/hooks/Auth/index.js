import { useEffect, useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { useCookies } from 'react-cookie';
import { UserServices } from '~/services';
import { initState, reducerState, initCase } from './init';
import { LocalStore } from '~/config/LocalStore';
const KEY_STORE = process.env.REACT_APP_WEBSITE_NAME+'-user';
export function useInitAuth() {
  const [state, dispath] = useReducer(reducerState, {
    ...initState,
    user:LocalStore.get(KEY_STORE,{})
  });
  const [cookies] = useCookies(['token']);
  const useServices = UserServices();
  useEffect(() => {
    if (state.isOpen) {
      dispath([initCase.TO_LOGIN]);
    }
  }, [state.isOpen]);
  useEffect(()=>{
    LocalStore.set(KEY_STORE, state.user);
  },[state.user])
  useEffect(() => {
    dispath([initCase.TOGGLE_LOADING, true]);
    if (cookies['token']) {
      const ourRequest = useServices.get({}, (data) => {
        dispath([initCase.SET_USER, data]);
        dispath([initCase.TOGGLE_LOADING, false]);
      });
      return ourRequest;
    } else {
      dispath([initCase.SET_USER,null]);
      LocalStore.set(KEY_STORE, null);
      dispath([initCase.TOGGLE_LOADING, false]);
    }
  }, [cookies['token']]);
  return { state, dispath };
}
export function useGetAuth() {
  const {
    auth: { state, dispath },
  } = useGetGlobalStateContext();
  return { state, dispath, initCase };
}
