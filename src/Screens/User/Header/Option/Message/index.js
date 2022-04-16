import {memo,useContext} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Tooltip,Badge,Button} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
function Message({...props}){
  const [cookies] = useCookies();
  if(Boolean(cookies['token'])){
    return(
        <div className={styles.option}>
            <Tooltip PopperProps={{sx:{display:{xs:'block', md:'none'}}}} placement="top"title="Thông báo"arrow>
              <Button component={NavLink} to="/" className={styles.button}>
                <Badge badgeContent="0" color="info" max={99}>
                  <span className={clsx("fa fa-comment-dots",styles.icon)}/>
                </Badge>
                <small className={styles.text}> Thông báo </small>
              </Button>
            </Tooltip>  
        </div>
    )
  }else{
    return <></>
  }
  
}
export default memo(Message);