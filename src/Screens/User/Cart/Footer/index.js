import {memo,useContext} from 'react';
import {NavLink} from "react-router-dom";
import {
  Drawer,
  CardActions,
  Tooltip,
  Button
} from '@mui/material/';
import {
  ShoppingCartCheckout,
} from '@mui/icons-material/';
import {getRoute} from "../../../../Config/Route/";
function CartFooter({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
    <CardActions sx={{justifyContent:'center'}}>
      <Button 
          variant="contained" 
          startIcon={<ShoppingCartCheckout />}
          component={NavLink}
          onClick={()=>(cart.handle.close())}
          to={getRoute("user","cart","index")}
      >Xem chi tiết giỏ hàng
      </Button>
    </CardActions>
  )
}
export default memo(CartFooter);