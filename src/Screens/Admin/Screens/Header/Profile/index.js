import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Tooltip,IconButton,Avatar} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Profile({...props}){
  return(
  <Grid item {...props}>
    <Tooltip title="Profile" placement="top">
      <IconButton className={styles.button}>
        <Avatar variant="outlined" className={styles.avatar}/>
      </IconButton>
    </Tooltip>
  </Grid>
  )
}
export default memo(Profile);