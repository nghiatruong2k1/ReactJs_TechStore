import {memo,Fragment,useContext,useEffect} from 'react';
import clsx from 'clsx';
import {
  Drawer,
  Paper,
  Box,
  Stack,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
  Button
} from '@mui/material/';
import {
  ShoppingCart,
  ShoppingCartCheckout,
  Close
} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import CartEmpty from "./CartEmpty/";
import CartItem from "./CartItem/";
function CartHeader(){
  const {cart} = useContext(global.config.UserContext);
  return (
    <CardHeader
      avatar={
        <ShoppingCart className={styles.icon}/>
      }
      titleTypographyProps={{
        component:"h5"
      }}
      title={"Giỏ hàng"}
      subheader={
        <>
          <Typography>
            {"Tổng cộng: "+global.config.formatNumber(cart.handle.getCount(),3,0)+" sản phẩm"}
          </Typography>
        </>
      }
      action={
        <Tooltip placement="top" title="Đóng">
          <IconButton onClick={()=>(cart.handle.close())}>
            <Close />
          </IconButton>
        </Tooltip>
      }
    ></CardHeader>
  )
}
function CartBody(){
  const {cart} = useContext(global.config.UserContext);
  return (
      <CardContent className={styles.content}>
        <Stack component="ul" spacing={1}>
            { (cart.handle.getCount() == 0) && <CartEmpty />
              || cart.state.datas.map(function(data,index){
                  if(data){
                    return <CartItem data={data} index={index} key={index} />
                  }else{
                    return <Fragment key={index}></Fragment>
                  }
              })
            }  
        </Stack>
    </CardContent>
  )
}
function CartFooter(){
  const {cart} = useContext(global.config.UserContext);
  return(
    <CardActions className={styles.footer}>
      <Button 
          variant="contained" 
          startIcon={<ShoppingCartCheckout />}
          component={NavLink}
          onClick={()=>(cart.handle.close())}
          to="/cart"
      >Xem chi tiết giỏ hàng
      </Button>
    </CardActions>
  )
}
function Cart({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
  <Paper>
    <Drawer 
      anchor="right"
      open={cart.state.isOpen}
      onClose={()=>(cart.handle.close())}
    >
      <Box height="100%" width="30em" maxWidth="100vw">
        <Card className={styles.card}>
          <CartHeader />
          <Divider />
          <CartBody />
          <Divider />
          <CartFooter />
        </Card>
      </Box>
    </Drawer>
  </Paper>
  )
}
export default memo(Cart);