import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Select,MenuItem,} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {CurrencyContext} from "../provider";
function CurrencyInput({...props}){
  const {value,values} = useContext(CurrencyContext)
  return(
    <Select
          fullWidth
          displayEmpty
          value={value.get}
          onChange={value.handle.change}
          size="small"
          renderValue={(selected) => {
            if (selected) {
              return values.get.find(c=>c.key == selected)?.text;
            }
            return "--Select currency--";
         }}
     >
       {values.get.map((value,index) => (
         <MenuItem
           key={index}
           value={value.key}
         >
           {value.text}
         </MenuItem>
       ))}
     </Select>
  )
}
export default memo(CurrencyInput);