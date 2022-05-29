import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie';
import clsx from 'clsx';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material/';

import AuthHead from "./Screens/Head/";
import AuthFormLogin from "./Screens/FormLogin/";
import AuthFormRegister from "./Screens/FormRegister/";
import AuthFormForget from "./Screens/FormForget/";
function Auth({...props}){
  const {auth} = useContext(global.config.AppContext);
  if(auth.state.user){
    return (<></>)
  }else{  
    return(
      <Dialog
          open={auth.state.isOpen}
          onClose={()=>(auth.handle.close())}
          fullWidth={true}
          scroll={'body'}
          PaperProps={{
            sx:{ 
              m:{
                xs:0.5,
                sm:1,
                md:1.5,
                lg:2
              },p:1
            }
          }}
        >
          <DialogTitle sx={{p:0.5}}>
            <AuthHead />
          </DialogTitle>
          <Divider />
          <DialogContent>
            {auth.state.action == 1 && <AuthFormLogin />}
            {auth.state.action == 2 && <AuthFormRegister />}
            {auth.state.action == 3 && <AuthFormForget />}
          </DialogContent>
      </Dialog>
    )
  }
}
export default memo(Auth);