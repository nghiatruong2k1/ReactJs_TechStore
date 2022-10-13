import { memo, useCallback } from 'react';
import {
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from '@mui/material/';
import { initCase } from '../FormProvider/init';
import { useGetFormContext } from '../FormProvider/provider';
function InputCheckbox({ name, label, validate, ...props }) {
  const { values, valids, dispath } = useGetFormContext();
  const handleChange = useCallback((e,check)=>{
    dispath([initCase.CHANGE_VALUE,{[name]:check}]);
  },[])
  return (
    <FormControl>
      <FormControlLabel
        {...props}
        name={name}
        control={
          <Checkbox checked={values[name] || false} onChange={handleChange} />
        }
        label={label}
      />
      {valids[name] && (
        <FormHelperText component="small" error>
          {valids[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
}
export default memo(InputCheckbox);
