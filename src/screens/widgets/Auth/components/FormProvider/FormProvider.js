import { memo, useReducer, useCallback } from 'react';
import { FormControl } from '@mui/material/';
import { checkObject } from '~/config/Validate';
import { reducerState, initCase } from './init';
import Provider from './provider';
function FormProvider({ initValues, rules, onSubmit, children }) {
  const [state, dispath] = useReducer(reducerState, {
    values: initValues || {},
    valids: {},
    isLoading: false,
  });
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispath([initCase.SET_LOADING, true]);
      const rs = checkObject(state.values, rules, (name, valids) => {
        dispath([initCase.CHANGE_VALID, { [name]: valids[0] }]);
      });
      if (rs === 0) {
        onSubmit &&
          onSubmit(state.values, () => {
            dispath([initCase.SET_LOADING,false]);
          });
      } else {
        dispath([initCase.SET_LOADING, false]);
      }
    },
    [state],
  );
  return (
    <Provider
      value={{
        ...state,
        dispath,
      }}
    >
      <FormControl
        onSubmit={handleSubmit}
        fullWidth
        component="form"
        method="post"
        disabled={state.isLoading}
      >
        {children}
      </FormControl>
    </Provider>
  );
}
export default memo(FormProvider);
