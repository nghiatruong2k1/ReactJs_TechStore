import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {Alert,AlertTitle,Tooltip} from '@mui/material/';
import {Error,Info,CheckCircle,Warning,Notifications,Help} from '@mui/icons-material/';
import styles from './styles.module.css';
const icons = {
  error: Error,
  info: Info,
  success: CheckCircle,
  warning: Warning,
  bell:Notifications,
  help:Help
}
const TIME_OUT = 10000
const TIME_RUN = 400
function Toast({title,message,type}){
  const [isShow,setShow] = useState(true);
  const [isRender,setRender] = useState(true);
  const [timeCreate,setTimeCreate] = useState(function(){
    const date = new Date();
    return date.toLocaleString('en-US');
  })
  const Icon = icons[type] ?? icons.bell;
  function handleClose(){
    if(isShow){
      setShow(false);
      return setTimeout(function(){
        setRender(false)
      },TIME_RUN)
    }
  }
  useEffect(function(){
    let timeOut;
    if(isShow){
      timeOut = setTimeout(function(){
        handleClose();
      },TIME_OUT-TIME_RUN)
    }
    return function(){
      if(timeOut){
        clearTimeout(timeOut)
      }

    }
  },[isShow])
  if(isRender){
    return(
      <Alert 
        icon={
          <Icon className={styles.icon}/>
        } 
        onClose={handleClose}
        className={clsx(
          styles.toast,
          styles[type] ?? styles.bell,
          isShow && styles.show || styles.hidden
        )}
        style={{
          "--time-out":TIME_OUT,
          "--time-run":TIME_RUN
        }}
      >
        <AlertTitle className={styles.title}/>
        {message}
      </Alert>
    )
  }else{
    return <></>
  }

}
export default memo(Toast);
/*

  <AlertTitle className={styles.title}>
      Thông báo
      <small>{` (${timeCreate})`}</small>
  </AlertTitle>
*/