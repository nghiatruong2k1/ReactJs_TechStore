import {memo,useState,useContext} from 'react';
import {TextField,InputAdornment,Tooltip,IconButton} from '@mui/material/';
import {FormContext} from "../FormProvider/";
import {ValidateTip} from "../../../../Components/";
function InputPassword({name,placeholder,title,...props}){
  const {values,valids,handle} = useContext(FormContext);
  function handleChange(event){
    handle.setValue(name,event.target.value)
  }
  const [isShow,setShow] = useState(false);
  function toggleShow(){
    setShow(!isShow)
  }

  return(
    <TextField
        size="small"
        type={isShow && "text" || "password"}
        inputProps={{
          name:name
        }}
        value={values[name] || ""}
        onChange={handleChange}
        FormHelperTextProps={{
          error:true,
          component:'small'
        }}
        helperText={valids[name] || " "}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip placement="top" title={title} arrow>
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