import {memo,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import {Tooltip,Typography,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ValidateTip({valid,show,timeShow,children,...props}){
  const [isShow,setShow] = useState(false);
  useEffect(function(){
    if(setShow){
      setShow(true)
    }
  },[show])
  useEffect(function(){
    console.log(Boolean(valid))
    if(Boolean(valid)){
      setShow(true);
    }else{
      setShow(false);
    }
  },[valid])
  useEffect(function(){
    let timeOut;
    if(isShow){
      timeOut = setTimeout(function(){
        setShow(false)
      },timeShow ?? 1000)
    };
    return function(){
      if(timeOut){
        clearTimeout(timeOut)
      }
    }
  },[isShow]);

  function handleOpen(){
    setShow(true)
  }
  function handleClose(){
    setShow(false)
  }

  return (
      <Tooltip open={Boolean(valid) && isShow} onOpen={handleOpen} onClose={handleClose} title={valid ?? ""} placement="top" arrow {...props}>
        {children}
      </Tooltip>
    )
}
export default memo(ValidateTip);