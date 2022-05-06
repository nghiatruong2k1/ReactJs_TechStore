import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {useCookies} from 'react-cookie';
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
  const {toast,auth} = useContext(global.config.context);
  const [cookies,setCookies,removeCookies] = useCookies();
  function handleClick(){
    console.log(removeCookies("token"))
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

function Navbar(props){
  const {anchorEl,open,onClose,id,typeId} = props;
  return(
    <Menu 
      anchorEl={anchorEl}
      open={Boolean(anchorEl && open)}
      onClose={onClose}
      width = '10em'
      MenuListProps={{
        sx:{
          padding:"0.5em"
        }
      }}
    >
      {(typeId == 4) && (
          <ProfileLink 
            to={`${getRoute("admin","dashboard","index")}`}
            icon={<span className={clsx("fa fa-user")}/>}
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