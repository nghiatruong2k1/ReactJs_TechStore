import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import {NavLink} from "react-router-dom";

import {DetailContext} from "../../provider";
import {getRoute} from "../../../../../../../Config/Route/"; 
function DataName({...props}){
  const {state} = useContext(DetailContext);
  if(!state.isLoading && state.data){
    let name = "Đang cập nhật";
    if(state.data.Name){
      name = state.data.Name
    }
    return(        
      <Typography 
            component={NavLink} 
            className="h4"
            to={`${getRoute("user","product","detail",{alias:state.data.Alias})}`}
        >{name}
      </Typography>
    )
  }else {
    return(
      <Skeleton variant="text" className="h4" />
    )
  } 
}
export default memo(DataName);