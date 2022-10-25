import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {routers} from "~/config/Router";



function ProfileLink({to,icon,text,...props}){
  return(
    <MenuItem sx={{padding:"0"}} {...props}>
      <ListItemButton component={NavLink} to={to}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </MenuItem>
  )
}

function LogoutButton(){
  const {toast} = useContext(global.config.context);
  const {auth} = useContext(global.config.AppContext);
  function handleClick(){
    auth.handle.logout();
    auth.handle.open();
  }
  return(
    <ProfileLink 
      onClick={handleClick}
      icon={<span className={clsx("fas fa-sign-out-alt")}/>}
      text={"Đăng xuất"}
    />
  )
}

function Navbar({anchorEl,isAdmin,open,onClose,...props}){
  return(
    <Menu 
      anchorEl={anchorEl}
      open={Boolean(anchorEl && open)}
      onClose={onClose}
      PaperProps={{
        onClick:onClose
      }}
      width = '20em'
      MenuListProps={{
        sx:{
          padding:"0.5em"
        }
      }}
    > 
        <ProfileLink 
          to={routers.profile.index.getAction()}
          icon={<span className={clsx("fa fa-user")}/>}
          text={"Tài khoản"}
        />
        <LogoutButton /> 
    </Menu>
  )
}
export default memo(Navbar);
