import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import styles from './styles.module.css';
function DataShortDes({loading,shortDes,...props}){
  return(
      <Typography 
          component={"p"} 
          my={1}
          className={styles.shortDes} 
      >
      {
        loading && <Skeleton variant="text" height="8em" className="skeleton"/> || shortDes
      }
      </Typography>
    ) 
}
export default memo(DataShortDes);