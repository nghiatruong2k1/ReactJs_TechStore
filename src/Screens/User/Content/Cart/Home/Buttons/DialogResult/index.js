
import {Button,
  Icon,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { formatNumber } from '../../../../../../../Config/Format';


export default function DialogResult({onClose,classNames,cart,auth,state,onYes,onNo,...props}){
  const {count,price} = cart.reduce(function(result,product){
    if(product){
      result.count+=product.Quantity;
      result.price+=product.Price * product.Quantity;
    }
    return result
  },{count:0,price:0})
  let salePrice = 0;
  if(state.voucher){
    salePrice = price * state.voucher.value / 100;
  }
  let name = (auth.FirstName || "") +" "+ (auth.LastName || "");
      return (
        <Dialog open={true} onClose={onClose} PaperProps={{className:classNames.paper,sx:{p:0.5}}}>
          <DialogTitle component="h6" sx={{p:0.5}}>
            <Icon className="fas fa-bell" sx={{pr:1}}></Icon>{"Xác nhận thanh toán"}
          </DialogTitle>
          <Paper component={DialogContent} variant="outlined" className={classNames.content} sx={{width:'30em',p:0.5}}>
            <List spacing={1}>
              <ListItem disablePadding 
                secondaryAction={name}
              >
                <ListItemText 
                  primary={"Tên khách hàng:"}
                />
              </ListItem>
              <ListItem disablePadding 
                secondaryAction={auth.Email}
              >
                <ListItemText 
                  primary={"Email:"}
                />
              </ListItem>
              <ListItem disablePadding 
                secondaryAction={auth.Phone}
              >
                <ListItemText 
                  primary={"Điện thoại:"}
                />
              </ListItem>
              <ListItem disablePadding 
                secondaryAction={auth.Location}
              >
                <ListItemText 
                  primary={"Địa chỉ:"}
                />
              </ListItem>
            </List>
            <Divider/>
            <List spacing={1}>
                {
                  cart.map(function(product,index){
                    return(
                      <ListItem key={index} disablePadding secondaryAction={"x"+formatNumber(product.Quantity,3,0)}>
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
