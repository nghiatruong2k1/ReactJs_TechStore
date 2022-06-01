import {memo,Fragment,useContext} from 'react';
import {
  Drawer,
  Paper,
  Box,
  Stack,
  Card
} from '@mui/material/';


import CartContent from "./Content/";
import CartHeader from "./Header/";
import CartFooter from "./Footer/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    card:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);


function Cart({...props}){
  const {cart} = useContext(global.config.UserContext);
  const styles = useStyles();
  return(
  <Paper>
    <Drawer 
      anchor="right"
      open={cart.state.isOpen}
      onClose={()=>(cart.handle.close())}
    >
      <Box height="100%" width="30em" maxWidth="100vw">
        <Card className={styles.card} component={Stack} sx={{height:'100%'}}>
          <CartHeader />
          <CartContent />
          <CartFooter />
        </Card>
      </Box>
    </Drawer>
  </Paper>
  )
}
export default memo(Cart);