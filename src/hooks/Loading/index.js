import { useCallback, useReducer } from 'react';
import { reducerState } from './init';
export const useInitLoading = (initLoading) => {
  const [state, dispath] = useReducer(
    reducerState,
    Boolean(initLoading) ? 1 : 0,
  );
  const handleLoading = useCallback(() => {
    dispath(!initLoading);
    return () => {
      dispath(initLoading);
    };
  }, []);
  return [Boolean(state > 0), handleLoading];
};
