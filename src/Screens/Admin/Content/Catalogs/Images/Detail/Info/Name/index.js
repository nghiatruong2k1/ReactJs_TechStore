import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,TextField,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailInfoContext} from "../provider";
function InfoName({left,right,...props}){
  const {data} = useContext(DetailInfoContext);
  function handleChange(event){
      data.handle.set("name",event.target.value);
      data.handle.set("alias",global.config.convertAlias(event.target.value));
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
            value={data.handle.get("name","")}
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