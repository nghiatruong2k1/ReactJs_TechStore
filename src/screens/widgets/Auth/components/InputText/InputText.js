import {memo, useCallback} from 'react';
import {TextField,InputAdornment,Tooltip} from '@mui/material/';
import { initCase } from '../FormProvider/init';
import { useGetFormContext } from '../FormProvider/provider';
function InputText({name,placeholder,title}){
  const {values,valids,dispath} = useGetFormContext();
  const handleChange = useCallback((e)=>{
    dispath([initCase.CHANGE_VALUE,{[name]:e.target.value}]);
  },[])
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
export default memo(InputText);