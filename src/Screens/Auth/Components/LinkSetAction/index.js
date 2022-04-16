import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Link} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function LinkSetAction({children,action,...props}){
  const {auth} = useContext(global.config.context);
  function handleClick(event){
    console.log(event)
    auth.handle.goAction(action)
  }
  return(
    <Link 
      underline="none"
      className={styles.link}
      onClick={handleClick}
    >{children}</Link>
  )
}
export default memo(LinkSetAction);