import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
function InputNumber({left,right,name,label,placeholder,value,onChange,valid,onValid,TextFieldProps,...props}){
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
          label=""
          value={value ?? ""}
          onChange={(e)=>(onChange && onChange(e,Number(e.target.value)))}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          type="number"
          FormHelperTextProps={{
            error:true,
            component:'small'
          }}
          helperText={valid ?? ""}
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputNumber);