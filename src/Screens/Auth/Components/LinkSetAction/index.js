import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Link} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function LinkSetAction({text,beforeText,afterText,action,...props}){
  const {auth} = useContext(global.config.AppContext);
  function handleClick(event){
    event.preventDefault();
    auth.handle.goAction(action)
  }
  return(
    <span>
    {beforeText && (beforeText+" ")}
    <Link 
      underline="none"
      className={styles.link}
      onClick={handleClick}
    >{text}</Link>
    {afterText && (" "+afterText)}
    </span>
  )
}
export default memo(LinkSetAction);