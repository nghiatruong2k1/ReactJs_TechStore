import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Tooltip,Badge,Button} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
function Login({...props}){
  const {auth} = useContext(global.config.context);
  const [cookies,setCookies] = useCookies();
  function handleClick(){
    auth.handle.open();
  }
  if(Boolean(cookies['token'])){
    return <></>
  }else{
    return(
      <div className={styles.option}>
        <Tooltip PopperProps={{sx:{display:{xs:'block', md:'none'}}}} placement="top"title="Đăng nhập" arrow>
          <Button component={NavLink} onClick={handleClick} to="/" className={styles.button}>
            <span className={clsx("fas fa-sign-in-alt",styles.icon)}/>
            <small className={styles.text}> Đăng nhập </small>
          </Button>
        </Tooltip>    
      </div>
  )
  }
}
export default memo(Login);