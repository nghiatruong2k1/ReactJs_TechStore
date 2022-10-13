import { useEffect, useReducer } from 'react';
import { useGetGlobalStateContext } from '~/states';

import { initState, reducerState, initCase } from './init';

export function useInitAuth() {
  const [state, dispath] = useReducer(reducerState, initState);

  useEffect(() => {
    if (state.isOpen) {
      dispath([initCase.TO_LOGIN]);
    }
  }, [state.isOpen]);

  return { state, dispath };
}
export function useGetAuth() {
  const {
    auth: { state, dispath },
  } = useGetGlobalStateContext();
  return { state, dispath, initCase };
}
