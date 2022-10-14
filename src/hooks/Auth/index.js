import { useEffect, useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';
import { useCookies } from 'react-cookie';
import { UserServices } from '~/services';
import { initState, reducerState, initCase } from './init';

export function useInitAuth() {
  const [state, dispath] = useReducer(reducerState, initState);
  const [cookies] = useCookies(['token']);
  const useServices = UserServices();
  useEffect(() => {
    if (state.isOpen) {
      dispath([initCase.TO_LOGIN]);
    }
  }, [state.isOpen]);

  useEffect(() => {
    dispath([initCase.SET_USER]);
    dispath([initCase.TOGGLE_LOADING, true]);
    if (cookies['token']) {
      const ourRequest = useServices.get({}, (data) => {
        dispath([initCase.SET_USER, data]);
        dispath([initCase.TOGGLE_LOADING, false]);
      });
      return ourRequest;
    } else {
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
