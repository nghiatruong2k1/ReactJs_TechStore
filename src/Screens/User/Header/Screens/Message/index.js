import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Badge,Grid} from '@mui/material/';
import {OptionButton} from "../../Components/";
import {getRoute} from "../../../../../Config/Route/";
function Message(props){
  const {auth} = useContext(global.config.AppContext);
  if(Boolean(auth.state.user)){
    return(
      <Grid item {...props}>
        <OptionButton
          title="Thông báo"
          to={getRoute("user","profile","message")}
          icon = {(
            <Badge badgeContent="0" color="info" max={99}>
              <span className={clsx("fa fa-bell")}/>
            </Badge>
          )}
        />
      </Grid> 
    )
  }else {
    return <></>
  }
  
}
export default memo(Message);