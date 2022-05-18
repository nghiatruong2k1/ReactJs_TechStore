import {memo,Fragment,useContext} from 'react';
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
  Typography
} from '@mui/material/';
import styles from './styles.module.css';

import CartEmpty from "./Empty/";
import CartItem from "./Item/";
import CartHeader from "./Header/";
import CartFooter from "./Footer/";


function CartBody(){
  const {cart} = useContext(global.config.UserContext);
  return (
      <CardContent sx={{flex:1,overflow:"scroll"}}>
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