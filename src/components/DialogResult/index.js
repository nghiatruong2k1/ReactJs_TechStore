
import { confirmAlert } from 'react-confirm-alert'; 
import clsx from 'clsx';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import styles from './styles.module.css';
export default function DialogResult({onClose,onYes,onNo,title,message,target,...props}){
  confirmAlert({
    customUI: ({onClose}) => {
      return (
        <Dialog open={true}>
          <DialogTitle className={styles.title} component="h6">
            <i className="fas fa-bell"></i>{title ?? "Thông báo"}
          </DialogTitle>
          <DialogContent className={styles.body} dividers={true}>
             <DialogContentText>{message || "Xác nhận xóa vĩnh viễn dữ liệu?"}</DialogContentText>
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
