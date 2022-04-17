import {memo,useContext} from 'react';
import {Skeleton,Typography} from '@mui/material/';
import {NavLink} from "react-router-dom";

import {DetailContext} from "../../provider";
function DataName({...props}){
  const route = global.config.useRoute();
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
            to={`${route.user.product.detail}/${state.data.Alias}`}
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