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
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import styles from './styles.module.css';
import { formatNumber } from '../../../../../../Config/Format';
export default function DialogResult({cart,state,onYes,onNo,...props}){
  const {count,price} = cart.reduce(function(result,product){
    if(product){
      console.log(result,product,state)
      result.count+=product.Quantity;
      result.price+=product.Price * product.Quantity;
    }
    return result
  },{count:0,price:0})
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
            <List spacing={1}>
                {
                  cart.map(function(product,index){
                    return(
                      <ListItem disablePadding secondaryAction={"x"+formatNumber(product.Quantity,3,0)}>
                        <ListItemText 
                          primary={product.Name} 
                          secondary={"Giá: "+formatNumber(product.Price) +" đ"}
                        />
                      </ListItem>
                    )
                  })
                }
            </List>
            <Divider />
            <List spacing={1}>
                <ListItem disablePadding 
                  secondaryAction={formatNumber(count,3,0)}
                >
                  <ListItemText 
                    primary={"Tổng số lượng:"}
                  />
                </ListItem>
                <ListItem disablePadding 
                  secondaryAction={formatNumber(price,3,0)+" đ"}
                >
                  <ListItemText 
                    primary={"Tổng giá:"}
                  />
                </ListItem>
                <ListItem disablePadding 
                  secondaryAction={formatNumber(salePrice,3,0) +" đ"}
                >
                  <ListItemText 
                    primary={"Giảm giá:"}
                  />
                </ListItem>
                <ListItem disablePadding 
                  secondaryAction={formatNumber(price-salePrice,3,0) +" đ"}
                >
                  <ListItemText 
                    primary={"Tổng thanh toán:"}
                  />
                </ListItem>
            </List>
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
