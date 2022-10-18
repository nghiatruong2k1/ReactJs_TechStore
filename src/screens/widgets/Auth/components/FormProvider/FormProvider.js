import { memo, useReducer, useCallback } from 'react';
import { FormControl } from '@mui/material/';
import { checkObject } from '~/config/Validate';
import { useGetAuth } from '~/hooks/Auth';
import { reducerState, initCase } from './init';
import Provider from './provider';
import clsx from 'clsx';
function FormProvider({ initValues, rules, onSubmit, children }) {
  const [state, dispath] = useReducer(reducerState, {
    values: initValues || {},
    valids: {},
  });
  const {
    state: { isLoading },
    handle: { handleLoading },
  } = useGetAuth();
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!isLoading) {
        const ourLoading = handleLoading();
        const rs = checkObject(state.values, rules, (name, valids) => {
          dispath([initCase.CHANGE_VALID, { [name]: valids[0] }]);
        });
        if (rs === 0) {
          onSubmit &&
            onSubmit(state.values, () => {
              ourLoading();
            });
        } else {
          ourLoading();
        }
      }
    },
    [state, isLoading],
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
        className={ clsx({disabled:isLoading}) }
      >
        {children}
      </FormControl>
    </Provider>
  );
}
export default memo(FormProvider);
