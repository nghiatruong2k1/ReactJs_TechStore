import {memo,useContext,useMemo} from 'react';
import {Badge} from '@mui/material/';
import clsx from "clsx";
import styles from '../styles.module.css';
import {OptionButton} from "../index";

function Cart(){
  const {cart} = useContext(global.config.UserContext);
  return (
    <OptionButton
      onClick={()=>{cart.handle.open();}}
      show={true}
      title={"Giỏ hàng"}
      icon={(
        <Badge badgeContent={cart.handle.getCount()+""} color="info" max={99}>
            <span className={clsx("fa fa-shopping-cart",styles.icon)}/>
        </Badge>
      )}
    >
      
    </OptionButton>
  )
}
export default memo(Cart);