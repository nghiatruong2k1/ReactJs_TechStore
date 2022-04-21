import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,Badge,Button} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
function Cart({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
    <div className={styles.option} >
      <Tooltip PopperProps={{sx:{display:{xs:'block', md:'none'}}}} placement="top"title="Giỏ hàng" arrow>
        <Button onClick={()=>(cart.handle.open())} className={styles.button}>
          <Badge badgeContent={cart.handle.getCount()+""} color="info" max={99}>
            <span className={clsx("fa fa-shopping-cart",styles.icon)}/>
          </Badge>
          <small className={styles.text}> Giỏ hàng </small>
        </Button>
      </Tooltip>  
    </div>
  )
}
export default memo(Cart);