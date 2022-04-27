import {memo} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
function DataName({loading,alias,name,...props}){
  const {getRoute} = global.config.useRoute();
  return(
      <Typography 
          component={!loading && NavLink || "span"} 
          className={styles.name}
          to={`${getRoute("user","product","detail")}/${alias}`}
          align="center"
      >
      {
        loading && <Skeleton variant="text" className="skeleton"  /> || name
      }
      </Typography>
  )
}
export default memo(DataName);