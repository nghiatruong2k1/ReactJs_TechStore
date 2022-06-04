import {memo,useContext} from 'react';
import {Link} from '@mui/material/';
import styles from './styles.module.css';
import {FormContext} from "../FormProvider/";
function LinkSetAction({text,beforeText,afterText,action,...props}){
  const {auth} = useContext(global.config.AppContext);
  const {isLoading} = useContext(FormContext);
  function handleClick(event){
    event.preventDefault();
    auth.handle.goAction(action)
  }
  return(
    <span>
    {beforeText && (beforeText+" ")}
    <Link 
      underline="none"
      disabled={isLoading}
      className={styles.link}
      onClick={handleClick}
    >{text}</Link>
    {afterText && (" "+afterText)}
    </span>
  )
}
export default memo(LinkSetAction);