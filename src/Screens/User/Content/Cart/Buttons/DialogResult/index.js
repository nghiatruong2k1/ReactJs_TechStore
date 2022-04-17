import { confirmAlert } from 'react-confirm-alert'; 
import clsx from 'clsx';
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Stack
} from '@mui/material';
import styles from './styles.module.css';
export default function DialogResult({count,price,sale,onYes,onNo,...props}){
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
                    <Typography>Số lượng:</Typography>
                    <Typography flex="1" align="right">{global.config.formatNumber(count)} đ</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Giá tiền:</Typography>
                    <Typography flex="1" align="right">{global.config.formatNumber(price)} đ</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Giảm giá:</Typography>
                    <Typography flex="1" align="right">{global.config.formatNumber(price*sale/100)} đ</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography>Tổng:</Typography>
                    <Typography flex="1" align="right">{global.config.formatNumber(price - price*sale/100)} đ</Typography>
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
