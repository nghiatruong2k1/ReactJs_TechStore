import {memo,useContext} from 'react';
import {useCookies} from "react-cookie"
import clsx from 'clsx';
import {MenuItem,LisitemButton,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function LogoutButton({...props}){
  const {toast} = useContext(global.config.context);
  const [cookies,setCookies,removeCookies] = useCookies();
  function handleClick(){
    removeCookies("token")
    toast.handle.add({message:"Đăng xuất thành công!"})
  }
  return(
    <MenuItem>
      <LisitemButton  component={NavLink} to="" onClick={handleClick}>
        <ListItemIcon>
          <span className={clsx("fas fa-sign-out-alt")}/>
        </ListItemIcon>
        <ListItemText>Đăng xuất</ListItemText>
      </LisitemButton>
    </MenuItem>
  )
}
export default memo(LogoutButton);