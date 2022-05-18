import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TextField,InputAdornment,Tooltip} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function InputEmail({name,placeholder,title, ...props}){
  const {values,valids,handle} = useContext(FormContext);
  function handleChange(event){
    handle.setValue(name,event.target.value)
  }
  return(
    <TextField
        size="small"
        type="text"
        value={values[name] || ""}
        onChange={handleChange}
        FormHelperTextProps={{
          error:true,
          component:'small'
        }}
        helperText={valids[name] || " "}
        placeholder={placeholder}
        inputProps={{
          name:name
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip placement="top" title={title} arrow>
                <span className="fas fa-envelope"></span>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
  )
}
export default memo(InputEmail);