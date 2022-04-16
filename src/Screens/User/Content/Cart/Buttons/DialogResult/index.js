import { confirmAlert } from 'react-confirm-alert'; 
import clsx from 'clsx';
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@mui/material';
import styles from './styles.module.css';
export default function DialogResult({totalItem,totalPrice,onYes,onNo,...props}){
  confirmAlert({
    customUI: ({onClose}) => {
      return (
        <Dialog open={true}>
          <DialogTitle className={styles.title} component="h6">
            <i className="fas fa-bell"></i>{"Xác nhận thanh toán"}
          </DialogTitle>
          <DialogContent sx={{width:'20em'}} className={styles.body} dividers={true}>
             <Typography>Số lượng: {totalItem}</Typography>
             <Typography>Tổng: {global.config.formatNumber(totalPrice)} đ</Typography>
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
