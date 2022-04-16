import {memo,useState,useEffect,useContext} from 'react';
import ReactLoading from "react-loading";
import {Button} from '@mui/material/';
import styles from './styles.module.css';
function LoadingData({...props}){
  const {loading} = useContext(global.config.context);
  if(loading.state.length > 0){
    return (
      <Button variant="outlined" className={styles.button}>
        <ReactLoading className={styles.svg} type="spokes"/>
      </Button>
    )
  }
  else{
    return <></>
  }
}
export default LoadingData;