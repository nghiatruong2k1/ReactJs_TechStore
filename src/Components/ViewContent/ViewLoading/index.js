import {memo} from 'react';
import ReactLoading from "react-loading";
import clsx from 'clsx';
import {Grid,Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ViewLoading({...props}){
  return(
    <Grid item xs={12}>
      <Stack direction="row" alignItems="center"justifyContent="center" spacing={3}>
        <ReactLoading type="bars" className={styles.svg}/>
        <Typography component="h3" className={styles.text}>
          Đang tải...
        </Typography>
      </Stack>
    </Grid>
  )
}
export default memo(ViewLoading);