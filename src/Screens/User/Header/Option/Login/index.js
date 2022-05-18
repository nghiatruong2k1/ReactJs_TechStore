import {memo,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie';
import styles from '../styles.module.css';
import clsx from 'clsx';

import {OptionButton} from "../index";
function Login(){
  const {auth} = useContext(global.config.AppContext);
  return (
    <OptionButton
      onClick={()=>{auth.handle.open();}}
      show={!auth.state.user}
      title="Đăng nhập"
      icon={(<span className={clsx("fas fa-sign-in-alt",styles.icon)}/>)}
    >
      
    </OptionButton>
  )
}
export default memo(Login);