import {memo} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material/';
import {NavLink} from "react-router-dom"
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ProfileNavbar({...props}){
  const args = [
    {
      text:"Thông tin tài khoản",
      url:"/profile"
    },{
      text:"Địa chỉ",
      url:"/profile/address"
    },{
      text:"Đơn hàng",
      url:"/profile/orders"
    },{
      text:"Yêu thích",
      url:"/profile/wishlist"
    },{
      text:"Tùy chọn",
      url:"/profile/setting"
    }
  ];
  return(
    <Grid item {...props}>
      <Paper sx={{p:1}}>
      <List>
        {args.map(function(item,index){
          return(
            <ListItem key={index} disablePadding divider>
              <ListItemButton component={NavLink} to={item.url}>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton> 
            </ListItem> 
          )
        })}
      </List>
      </Paper>
    </Grid>
  )
}
export default memo(ProfileNavbar);