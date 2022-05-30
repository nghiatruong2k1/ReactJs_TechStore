import {memo,useContext} from 'react';
import {
  CardHeader,
  Typography,
  IconButton,
  Tooltip
} from '@mui/material/';
import {
  ShoppingCart,
  Close
} from '@mui/icons-material/';
import {formatNumber} from "../../../../Config/Format/";
function CartHeader({...props}){
	const {cart} = useContext(global.config.UserContext);
	return (
	    <CardHeader
	      avatar={
	        <ShoppingCart sx={{fontSize:"2em !important"}}/>
	      }
	      titleTypographyProps={{
	        component:"h5"
	      }}
	      title={"Giỏ hàng"}
	      subheader={
	          <Typography>
	            {"Tổng cộng: "+formatNumber(cart.handle.getCount(),3,0)+" sản phẩm"}
	          </Typography>
	      }
	      action={
	        <Tooltip placement="top" title="Đóng">
	          <IconButton sx={{color:"#f00",fontSize:"2em !important"}} onClick={()=>(cart.handle.close())}>
	            <Close />
	          </IconButton>
	        </Tooltip>
	      }
	    >
	   </CardHeader>
	)
}
export default memo(CartHeader);