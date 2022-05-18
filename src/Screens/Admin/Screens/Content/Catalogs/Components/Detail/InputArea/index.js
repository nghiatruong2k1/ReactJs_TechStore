import {memo,useContext} from 'react';
import {Grid,TextField,Typography,FormHelperText} from '@mui/material/';
function InputArea({left,right,name,label,placeholder,value,onChange,valid,onValid,TextFieldProps,...props}){
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <FormHelperText component="small" error>{valid ?? ""}</FormHelperText>   
        <TextField
          label=""
          value={value ??  ""}
          onChange={(e)=>(onChange && onChange(e,e.target.value))}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          FormHelperTextProps={{
            error:true,
            component:'small'
          }}
          multiline
          rows={5}
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputArea);