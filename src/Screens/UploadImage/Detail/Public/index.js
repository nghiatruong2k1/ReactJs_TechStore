import {memo,useContext} from 'react';
import {Grid,Switch,Typography} from '@mui/material/';
import {DetailContext} from "../provider";
function InfoPublic({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.set("isPublic",event.target.checked)
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Switch value={true} checked={handle.get("isPublic")} onChange={handleChange} />
      </Grid>
      <Grid item {...right}>
        <Typography>Is public</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InfoPublic);