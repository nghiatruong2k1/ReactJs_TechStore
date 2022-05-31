import {memo,useContext} from 'react';
import {Grid,Switch,Typography} from '@mui/material/';
import {DetailContext} from "../Detail/provider";
function InfoPublic({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.set("IsPublic",event.target.checked)
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Switch value={true} checked={handle.get("IsPublic")} onChange={handleChange} />
      </Grid>
      <Grid item {...right}>
        <Typography>Công khai</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InfoPublic);