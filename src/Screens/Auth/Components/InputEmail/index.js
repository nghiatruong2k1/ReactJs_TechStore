import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TextField,InputAdornment,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function InputEmail({name,placeholder, ...props}){
  return(
    <TextField
        size="small"
        type="email"
        required
        placeholder={placeholder}
        inputProps={{
          name:name
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip placement="top" title={placeholder} arrow>
                <span className="fas fa-envelope"></span>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
  )
}
export default memo(InputEmail);