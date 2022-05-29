import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import { getRoute } from '../../../../../../../../../../../Config/Route/';
function DataName({loading,name,alias,...props}){
  return(
      <Typography 
          component={!loading && NavLink || "span"} 
          className={styles.name}
          to={`${getRoute("user","product","detail",{alias:alias})}`}
      >
      {
        loading && <Skeleton variant="text" className="skeleton"/> || name
      }
      </Typography>
    ) 
}
export default memo(DataName);