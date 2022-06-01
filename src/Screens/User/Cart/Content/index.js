import {memo,Fragment,useContext} from 'react';
import {
  Stack,
  Paper,
  CardContent
} from '@mui/material/';

import CartItem from "../Item/";
import CartEmpty from "../Empty/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    paper:{
      color:`${theme.palette.text.default} !important`,
      backgroundColor:`${theme.palette.background.default} !important`
    }
  }}
);

function CartContent(){
  const {cart} = useContext(global.config.UserContext);
  const styles = useStyles();
  return (
    <CardContent  sx={{ flex:1,p:0.5,overflow:"hidden"}}>
        <Paper variant={"outlined"} className={styles.paper} sx={{height:"100%",p:0.5,overflowX:"hidden"}}>
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
        </Paper>
    </CardContent>
  )
}
export default CartContent