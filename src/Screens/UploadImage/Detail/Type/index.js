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
        <Typography>Type: </Typography>
      </Grid>
      <Grid item {...right}>
        <Typography>{handle.get("type","")}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(Size);