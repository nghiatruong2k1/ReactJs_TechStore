import {memo,useState,useContext,useRef,useEffect} from 'react';
import clsx from 'clsx';
import {TextField,InputAdornment,Tooltip,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function InputPassword({name,placeholder, ...props}){
  const [isShow,setShow] = useState(false);
  function toggleShow(){
    setShow(!isShow)
  }

  return(
    <TextField
        size="small"
        type={isShow && "text" || "password"}
        inputProps={{
          minLength:5,
          name:name
        }}
        required
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip placement="top" title={placeholder} arrow>
                <span className="fas fa-lock"></span>
              </Tooltip>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip placement="top" title={isShow && "Ẩn" || "Hiển thị"} arrow>
                <IconButton onClick={toggleShow}>
                  <span className={isShow && "fas fa-eye-slash" || "fas fa-eye"}></span>  
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )
        }}
      />
  )
}
export default memo(InputPassword);