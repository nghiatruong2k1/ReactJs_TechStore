import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import AuthHead from "./Screens/Head/";
import AuthFormLogin from "./Screens/FormLogin/";
import AuthFormRegister from "./Screens/FormRegister/";
import AuthFormForget from "./Screens/FormForget/";
function Auth({...props}){
  const [cookies,setCookies] = useCookies();
  const {auth} = useContext(global.config.context);
  if(Boolean(cookies['token'])){
    return (<></>)
  }else{
    return(
      <Dialog
          open={auth.state.isOpen}
          onClose={()=>(auth.handle.close())}
          fullWidth={true}
          scroll={'body'}
          PaperProps={{
            className:styles.container
          }}
        >
          <DialogTitle className={styles.head}>
            <AuthHead />
          </DialogTitle>
          <Divider />
          <DialogContent className={styles.content}>
            {auth.state.action == 1 && <AuthFormLogin />}
            {auth.state.action == 2 && <AuthFormRegister />}
            {auth.state.action == 3 && <AuthFormForget />}
          </DialogContent>
      </Dialog>
    )
  }
  
}
export default memo(Auth);