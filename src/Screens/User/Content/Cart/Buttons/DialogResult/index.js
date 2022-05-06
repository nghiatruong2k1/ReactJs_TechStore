import { confirmAlert } from 'react-confirm-alert'; 
import clsx from 'clsx';
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Stack,
  Divider
} from '@mui/material';
import styles from './styles.module.css';
import { formatNumber } from '../../../../../../Config/Format';
export default function DialogResult({cart,state,onYes,onNo,...props}){
  const {count,price,items} = cart.reduce(function(result,product){
    if(product){
      console.log(result,product,state)
      result.count+=product.Quantity;
      result.price+=product.Price * product.Quantity;
    }
    return result
  },{count:0,price:0,items:[]})
  let salePrice = 0;
  if(state.voucher){
    salePrice = price * state.voucher.value / 100;
  }
  confirmAlert({
    customUI: ({onClose}) => {
      return (
        <Dialog open={true}>
          <DialogTitle className={styles.title} component="h6">
            <i className="fas fa-bell"></i>{"Xác nhận thanh toán"}
          </DialogTitle>
          <DialogContent sx={{width:'30em'}} className={styles.body} dividers={true}>
             <Stack spacing={1}>
                <Stack direction="row">
                    <Typography>Tổng số lượng:</Typography>
                    <Typography flex="1" align="right">{formatNumber(count)} </Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Tông tiền:</Typography>
                    <Typography flex="1" align="right">{formatNumber(price)} đ</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Giảm giá:</Typography>
                    <Typography flex="1" align="right">{formatNumber(salePrice)} đ</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Tổng thanh toán:</Typography>
                    <Typography flex="1" align="right">{formatNumber(price - salePrice)} đ</Typography>
                </Stack>
            </Stack>
          </DialogContent>
          <DialogActions className={styles.foot}>
              <Button onClick={()=>{onNo && onNo();onClose();}}
                autoFocus color="error" variant="contained"
              >
                Hủy
              </Button>
              <Button onClick={()=>{onYes && onYes(); onClose();}}
                color="success" variant="contained"
              >
                Đồng ý
              </Button>
          </DialogActions>
        </Dialog>
      )
    }
  });
}
