import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {getRoute} from "../../../../../../Config/Route/";



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
  const {auth} = useContext(global.config.AppContext);
  function handleClick(){
    auth.handle.logout();
    auth.handle.open();
  }
  return(
    <ProfileLink to="" 
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
        {isAdmin && (
          <ProfileLink 
            to={`${getRoute("admin","dashboard","index")}`}
            icon={<span className={clsx("fa fa-user-cog")}/>}
            text={"Trang quản trị"}
          />
        )}
        <ProfileLink 
          to={`${getRoute("user","profile","index")}`}
          icon={<span className={clsx("fa fa-user")}/>}
          text={"Tài khoản"}
        />
        <LogoutButton /> 
    </Menu>
  )
}
export default memo(Navbar);
