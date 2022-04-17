import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
function DataName({loading,name,alias,...props}){
  const route = global.config.useRoute();
  return(
      <Typography 
          component={!loading && NavLink} 
          className={styles.name}
          to={`${route.user.product.detail}/${alias}`}
      >
      {
        loading && <Skeleton variant="text" className="skeleton"/> || name
      }
      </Typography>
    ) 
}
export default memo(DataName);