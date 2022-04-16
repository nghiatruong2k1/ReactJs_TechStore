import {memo,useContext} from 'react';
import clsx from 'clsx';
import {FormControlLabel,Checkbox,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function InputCheckbox({name,label, ...props}){
  return(
    <FormControlLabel 
      {...props}
      name={name}
      control={<Checkbox />} 
      label={label} 
      required
    />
  )
}
export default memo(InputCheckbox);