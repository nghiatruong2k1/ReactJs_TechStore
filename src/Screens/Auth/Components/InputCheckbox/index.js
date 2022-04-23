import {memo,useContext} from 'react';
import clsx from 'clsx';
import {FormControl,FormHelperText,FormControlLabel,Checkbox,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function InputCheckbox({name,label,validate, ...props}){
  const {values,valids,handle} = useContext(FormContext);
  function handleChange(event,check){
    handle.setValue(name,check)
  }
  return(
  <FormControl>
    <FormControlLabel 
      {...props}
      name={name}
      control={<Checkbox checked={values[name] || false} onChange={handleChange}/>} 
      label={label}
    />
    {valids[name] && <FormHelperText component="small" error>{valids[name]}</FormHelperText>}
  </FormControl>
  )
}
export default memo(InputCheckbox);