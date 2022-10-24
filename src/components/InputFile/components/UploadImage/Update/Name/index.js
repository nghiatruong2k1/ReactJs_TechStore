import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../Detail/provider";
function InfoName({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.set("Name",event.target.value);
      handle.set("Alias",global.config.convertAlias(event.target.value));
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
          <Typography>Tên ảnh:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
            label=""
            value={handle.get("Name","")}
            onChange={handleChange}
            placeholder="Tên:"
            size="small"
            fullWidth
          />
        </Grid>
    </Grid>
  )
}
export default memo(InfoName);