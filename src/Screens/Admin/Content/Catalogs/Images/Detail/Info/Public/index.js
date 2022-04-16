import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Switch,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailInfoContext} from "../provider";
function InfoPublic({left,right,...props}){
  const {data} = useContext(DetailInfoContext);
  function handleChange(event){
      data.handle.set("isPublic",event.target.checked)
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Switch value={true} checked={data.handle.get("isPublic")} onChange={handleChange} />
      </Grid>
      <Grid item {...right}>
        <Typography>Is public</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InfoPublic);