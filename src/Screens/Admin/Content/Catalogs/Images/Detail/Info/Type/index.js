import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Grid,Typography
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailInfoContext} from "../provider";
function Size({left,right,...props}){
  const {data} = useContext(DetailInfoContext);
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Typography>Type: </Typography>
      </Grid>
      <Grid item {...right}>
        <Typography>{data.handle.get("type","")}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(Size);