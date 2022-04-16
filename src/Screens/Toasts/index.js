import {memo,useContext,useEffect} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Stack} from '@mui/material/';
function Toasts({...props}){
  const {toast} = useContext(global.config.context);
  useEffect(function(){

  },[])
  return(
    <div className={styles.toasts}>
      <Stack 
        spacing={1} 
        justifyContent="flex-end"
        className={styles.content}
        id="toasts"
      >
        {toast.state}
      </Stack>
    </div>
  )
}
export default memo(Toasts);