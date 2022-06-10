
import {Button,
  Icon,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Typography,
  DialogTitle
} from '@mui/material';
import OrderDetail from './OrderDetail';

export default function DialogResult({onClose,classNames,onYes,onNo,children,cart,auth,state,...props}){
      return (
        <Dialog open={true} onClose={onClose} PaperProps={{className:classNames.paper,sx:{p:0.5}}}>
          <DialogTitle component="h6" sx={{p:0.5}}>
            <Icon className="fas fa-bell"></Icon>
            <Typography sx={{px:2}}>Xác nhận thanh toán</Typography>
          </DialogTitle>
          <Paper component={DialogContent} variant="outlined" className={classNames.content} sx={{width:'30em',p:0.5}}>
            <OrderDetail 
              cart={cart}
              auth={auth}
              state={state}
            />
          </Paper>
          <DialogActions sx={{p:0.5}}>
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
