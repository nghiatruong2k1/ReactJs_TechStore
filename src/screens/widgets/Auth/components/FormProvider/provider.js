import { memo, createContext, useReducer, useContext } from 'react';
import { FormControl } from '@mui/material/';
import { checkObject } from '~/config/Validate';
import { reducerState, initCase } from './init';
export const FormContext = createContext();
export function useGetFormContext() {
  return useContext(FormContext);
}
function FormProvider({ value, children }) {
  return (
    <FormContext.Provider
      value={value}
    >
       {children}
    </FormContext.Provider>
  );
}
export default memo(FormProvider);
