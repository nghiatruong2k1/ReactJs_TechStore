import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';



import ViewEmpty from "./ViewEmpty/";
import ViewLoading from "./ViewLoading/";
function ViewContent({loading,viewLoading,length,empty,children,...props}){
  if(loading){
    if(Boolean(viewLoading)){
      return (<ViewLoading />)
    }
  }else if(!Boolean(length) || length && length <= 0){
    return (<ViewEmpty children={empty}/>)
  }

  return <>{children}</>
  
}
export default memo(ViewContent);