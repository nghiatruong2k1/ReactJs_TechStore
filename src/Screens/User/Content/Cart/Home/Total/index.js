import {memo,useContext,useMemo} from 'react';
import {Grid,Paper,Stack,Typography,Divider} from '@mui/material/';
import {Image} from "../../../../../../Components"
import {CartContext} from "../provider";
import {formatNumber} from "../../../../../../Config/Format";
function Total({...props}){
  const {cart} = useContext(global.config.UserContext);
  const {state,dispath} = useContext(CartContext);
  const sale = useMemo(function(){
    if(state.voucher){
      return state.voucher.Value
    }
    return 0
  },[state.voucher])
  const price = useMemo(function(){
    return cart.handle.getPrice();
  },[cart.state])
  return(
  <Grid item {...props}>
    <Paper sx={{p:1,height:"100%"}}>
      <Stack spacing={1}>
          <Stack direction="row">
              <Typography>Giá tiền:</Typography>
              <Typography flex="1" align="right">{formatNumber(price)} đ</Typography>
          </Stack>
          <Stack direction="row">
              <Typography>Giảm giá:</Typography>
              <Typography flex="1" align="right">{formatNumber(price*sale/100)} đ</Typography>
          </Stack>
          <Stack direction="row">
              <Typography>Tổng:</Typography>
              <Typography flex="1" align="right">{formatNumber(price - price*sale/100)} đ</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" px={8}>
            
          </Stack>
      </Stack>
    </Paper>
  </Grid>
  )
}
export default memo(Total);