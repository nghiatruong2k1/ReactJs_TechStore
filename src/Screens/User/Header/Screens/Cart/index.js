import {memo,useContext,useMemo} from 'react';
import {Badge,Grid} from '@mui/material/';
import clsx from "clsx";

import {OptionButton} from "../../Components/";
function Cart(props){
  const {cart} = useContext(global.config.UserContext);
  return (
  <Grid item {...props}>
    <OptionButton
      onClick={()=>{cart.handle.open();}}
      title={"Giỏ hàng"}
      icon={(
        <Badge badgeContent={cart.handle.getCount()+""} color="info" max={99}>
            <span className={clsx("fa fa-shopping-cart")}/>
        </Badge>
      )}
    />
  </Grid>
  )
}
export default memo(Cart);