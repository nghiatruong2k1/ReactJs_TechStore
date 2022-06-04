import {memo,useMemo} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Icon,
  useMediaQuery
} from '@mui/material/';
import {NavLink,useLocation} from "react-router-dom";
import { getRoute } from '../../../../../Config/Route/';
import useStyles from './styles';
function ProfileNavbar({...props}){
  const location = useLocation();
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.up("md")));
  const args = useMemo(function(){
    return [
      {
        text:"Tài khoản",
        icon:(<Icon className="fas fa-user-circle"/>),
        url:getRoute("user","profile","index")
      },{
        text:"Đơn hàng",
        icon:(<Icon className="fas fa-store"/>),
        url:getRoute("user","profile","orders")
      },{
        text:"Thông báo",
        icon:(<Icon className="fas fa-bell"/>),
        url:getRoute("user","profile","message")
      },{
        text:"Tùy chọn",
        icon:(<Icon className="fas fa-cog"/>),
        url:getRoute("user","profile","settings")
      }
    ]
  },[]);
  const styles = useStyles();
  return(
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <CardContent sx={{p:1}}>
          <List>
            {args.map(function({text,icon,url},index){
              let isActive = false;
              if(location.pathname.toLowerCase().indexOf(url.toLowerCase()) !== -1){
                isActive = true;
              }
              return(
                <ListItem key={index} disablePadding divider>
                  <ListItemButton component={NavLink} to={url}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    {isMd && <ListItemText primaryTypographyProps={{sx:{fontWeight: isActive && 'bold' || "initial"}}}>{text}</ListItemText>}
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