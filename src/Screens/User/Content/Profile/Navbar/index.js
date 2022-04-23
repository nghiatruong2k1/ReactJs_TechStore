import {memo,useMemo} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material/';
import {NavLink,useLocation} from "react-router-dom"
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function ProfileNavbar({...props}){
  const {getRoute} = global.config.useRoute();
  const location = useLocation()
  const args = useMemo(function(){
    return [
      {
        text:"Tài khoản",
        url:getRoute("user","profile","index")
      },{
        text:"Địa chỉ",
        url:getRoute("user","profile","address")
      },{
        text:"Đơn hàng",
        url:getRoute("user","profile","orders")
      },{
        text:"Thông báo",
        url:getRoute("user","profile","message")
      },{
        text:"Tùy chọn",
        url:getRoute("user","profile","settings")
      }
    ]
  },[]);
  return(
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <CardContent sx={{p:1}}>
          <List>
            {args.map(function(item,index){
              let isActive = false;
              if(location.pathname.toLowerCase().indexOf(item.url.toLowerCase()) !== -1){
                isActive = true;
              }
              return(
                <ListItem key={index} disablePadding divider>
                  <ListItemButton className={clsx({[styles.active]:isActive})} component={NavLink} to={item.url}>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton> 
                </ListItem> 
              )
            })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(ProfileNavbar);