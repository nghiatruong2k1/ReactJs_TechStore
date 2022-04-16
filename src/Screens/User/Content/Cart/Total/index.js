import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Paper,Stack,Typography,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {Image} from "../../../../../Components/"
function Total({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
    <Paper sx={{p:2,flex:1}}>
      <Stack spacing={1}>
        <Stack direction="row">
              <Typography>Giá tiền:</Typography>
              <Typography flex="1" align="right">{global.config.formatNumber(cart.handle.getPrice())} đ</Typography>
          </Stack>
          <Stack direction="row">
              <Typography>Giảm giá:</Typography>
              <Typography flex="1" align="right">0 đ</Typography>
          </Stack>
          <Stack direction="row">
              <Typography>Tổng:</Typography>
              <Typography flex="1" align="right">{global.config.formatNumber(cart.handle.getPrice())} đ</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" px={8}>
            <Image contain src="images/misc/payments.png" height="26" />
          </Stack>
      </Stack>
    </Paper>
  )
}
export default memo(Total);