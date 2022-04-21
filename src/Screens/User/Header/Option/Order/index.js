import {memo,useContext,useEffect,useState} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Tooltip,Badge,Button} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
function Order({...props}){
  const [cookies,setCookies] = useCookies();
  const {getRoute} = global.config.useRoute();
  const Fetch = global.config.useFetch();
  if(Boolean(cookies['token'])){
    return(
      <div className={styles.option}>
        <Tooltip PopperProps={{sx:{display:{xs:'block', md:'none'}}}} placement="top"title="Đơn hàng"arrow>
          <Button component={NavLink} to={getRoute("user","profile","orders")} className={styles.button}>
            <span className={clsx("fa fa-store",styles.icon)}/>
            <small className={styles.text}> Đơn hàng </small>
          </Button>
        </Tooltip>  
      </div>
    )
  }else{
    return <></>
  }
}
export default memo(Order);