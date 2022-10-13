import {memo,useCallback} from 'react';
import {TextField,InputAdornment,Tooltip,IconButton} from '@mui/material/';
import { useGetFormContext } from '../FormProvider/provider';
import { initCase } from '../FormProvider/init';
import { useDisclosure } from '@mantine/hooks';
function InputPassword({name,placeholder,title,...props}){
  const {values,valids,dispath} = useGetFormContext();
  const handleChange = useCallback((e)=>{
    dispath([initCase.CHANGE_VALUE,{[name]:e.target.value}]);
  },[])
  const [isShow,{toggle}] = useDisclosure(false)

  return(
    <TextField
        size="small"
        type={(isShow && "text") || "password"}
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
              <Tooltip placement="top" title={(isShow && "Ẩn") || "Hiển thị"} arrow>
                <IconButton onClick={toggle}>
                  <span className={(isShow && "fas fa-eye-slash") || "fas fa-eye"}></span>  
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )
        }}
      />
  )
}
export default memo(InputPassword);