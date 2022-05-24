

import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid} from "@mui/material/";
import {OptionButton} from "../../Components/";

import {getRoute} from "../../../../../Config/Route/";
function Order(props){
  const {auth} = useContext(global.config.AppContext);
  if(Boolean(auth.state.user)){
    return(
      <Grid item {...props}>
        <OptionButton title = {"Đơn hàng"}
          to = {getRoute("user","profile","orders")}
          icon = {<span className={clsx("fa fa-store")}/>}
        />
      </Grid>
    )
  }else{
    return <></>
  }
}
export default memo(Order);