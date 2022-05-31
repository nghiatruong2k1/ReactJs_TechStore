import {memo} from 'react';
import {Grid,TextField,Typography,FormHelperText} from '@mui/material/';
function InputText({left,right,name,label,placeholder,value,onChange,valid,onValid,TextFieldProps,validate,...props}){
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
          label=""
          value={value ?? ""}
          onChange={(e)=>(onChange && onChange(e,e.target.value))}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
      <Grid item xs={12}>
       <FormHelperText component="small" error>{valid ?? ""}</FormHelperText> 
      </Grid>
    </Grid>
  )
}
export default memo(InputText);