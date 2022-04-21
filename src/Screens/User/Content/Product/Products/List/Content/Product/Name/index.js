import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
function DataName({loading,name,alias,...props}){
  const {getRoute} = global.config.useRoute();
  return(
      <Typography 
          component={!loading && NavLink || "span"} 
          className={styles.name}
          to={`${getRoute("user","product","detail")}/${alias}`}
      >
      {
        loading && <Skeleton variant="text" className="skeleton"/> || name
      }
      </Typography>
    ) 
}
export default memo(DataName);