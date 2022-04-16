import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../provider";
function InfoName({left,right,...props}){
  const {data,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.set("name",event.target.value);
      handle.set("alias",global.config.convertAlias(event.target.value));
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
          <Typography>Image Name:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
            value={handle.get("name","")}
            onChange={handleChange}
            placeholder="Image Name"
            size="small"
            fullWidth
          />
        </Grid>
    </Grid>
  )
}
export default memo(InfoName);