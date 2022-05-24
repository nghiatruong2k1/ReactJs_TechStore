import {memo,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie';
import clsx from 'clsx';

import {Grid} from "@mui/material/";
import {OptionButton} from "../../Components/";
function Login(props){
  const {auth} = useContext(global.config.AppContext);
  if(Boolean(auth.state.user)){
    return <></>
  }else{
    return (
      <Grid item {...props}>
        <OptionButton
          onClick={()=>{auth.handle.open();}}
          title="Đăng nhập"
          icon={(<span className={clsx("fas fa-sign-in-alt")}/>)}
        />
      </Grid>
    )
  }
}
export default memo(Login);