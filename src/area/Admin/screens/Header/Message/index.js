import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Tooltip,Badge,IconButton} from '@mui/material/';
import {NotificationsActive} from '@mui/icons-material/';
import styles from './styles.module.css';
function Message({...props}){
  return(
  <Grid item {...props}>
    <Tooltip title="Thông báo" placement="top" arrow>
      <IconButton className={styles.button}>
        <Badge badgeContent={0} color="primary">
          <NotificationsActive/>
        </Badge>
      </IconButton>
    </Tooltip>
  </Grid>
  )
}
export default memo(Message);