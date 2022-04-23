import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
function InputNumber({left,right,name,label,placeholder,defaultValue,TextFieldProps,...props}){
  const {state,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.change(name,event.target.value);
  }
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
          label=""
          value={state.data[name] ?? 0}
          onChange={handleChange}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          type="number"
          FormHelperTextProps={{
            error:true,
            component:'small'
          }}
          helperText={state.valids[name] || " "}
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputNumber);