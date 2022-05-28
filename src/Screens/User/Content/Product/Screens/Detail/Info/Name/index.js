import {memo} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {getRoute} from "../../../../../../../../Config/Route/"; 
function DataName({loading,name,alias,...props}){
  return(        
    <Typography component={loading && "p" || NavLink} variant="h4" 
      to={getRoute("user","product","detail",{alias})}
    >
      {
        loading && (<Skeleton variant="text" className="skeleton" />) || (name || "")
      }
    </Typography>
  )
}
export default memo(DataName);