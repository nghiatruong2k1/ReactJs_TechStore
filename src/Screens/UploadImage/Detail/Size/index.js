import {memo,useContext} from 'react';
import {
  Grid,Typography
} from '@mui/material/';
import {DetailContext} from "../provider";
function Size({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Typography>Size: </Typography>
      </Grid>
      <Grid item {...right}>
        <Typography>{global.config.formatByte(handle.get("size",0))}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(Size);