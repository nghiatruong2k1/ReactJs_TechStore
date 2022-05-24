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
      return (<ViewLoading {...props}/>)
    }
  }else if(!Boolean(length)){
    if(!Boolean(empty) || typeof(empty) === 'string'){
      return (<ViewEmpty children={empty} {...props}/>)
    }else{
      return <>{empty}</>
    }
  }

  return children
  
}
export default memo(ViewContent);