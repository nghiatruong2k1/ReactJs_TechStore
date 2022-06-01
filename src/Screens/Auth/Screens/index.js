import {memo,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material/';

import AuthHead from "./Head/";
import AuthFormLogin from "./FormLogin/";
import AuthFormRegister from "./FormRegister/";
import AuthFormForget from "./FormForget/";
function AuthDialog({...props}){
  const {auth} = useContext(global.config.AppContext);
  const navigator = useNavigate();
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
export default memo(AuthDialog);