import {memo,useState,useRef,useReducer,useContext,useEffect} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Button,ClickAwayListener,Tooltip,Badge,Paper,Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText,Avatar} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
import {initData,reducer} from "./init"
import LogoutButton from "./Logout/";
function Profile({...props}){
  const Fetch = global.config.useFetch();
  const [cookies,setCookies] = useCookies();
  const [state,dispath] = useReducer(reducer,initData);
  const buttonRef = useRef(null)
  const [isOpen, setOpen] = useState(false);
  function handleClick(){
    setOpen(true);
  };
  function handleClose(){
    setOpen(false);
  };
  useEffect(function(){
    if(Boolean(cookies['token'])){
      Fetch.get({
        api:"api/user",
        onThen:function({data,...result}){
          dispath({key:'set',payload:{
            Name:data.FirstName+" "+data.LastName,
            ImageUrl:data.ImageUrl,
            TypeId:data.TypeId
          }})
        }
      })
    }else{
      dispath({key:"reset"})
    }
  },[cookies['token']])
  if(Boolean(cookies['token'])){
    return(
      <div className={styles.option}>
        <Tooltip PopperProps={{sx:{display:{xs:'block', md:'none'}}}} placement="top"title={state.Name ?? initData.Name}arrow>
          <Button ref={buttonRef} onClick={handleClick}className={styles.button}>
            <Avatar className={styles.icon} alt={state.Name ?? initData.Name} src={state.ImageUrl} />
            <small className={styles.text}>{state.Name ?? initData.Name}</small>
          </Button>
        </Tooltip> 
        <Menu 
            anchorEl={buttonRef.current}
            open={isOpen}
            onClose={handleClose}
            width = '10em'
            arrow
          >
            {(state.TypeId == 4) && (
              <MenuItem component={NavLink} to="/admin">
                <ListItemIcon>
                    <span className={clsx("fa fa-user")}/>
                  </ListItemIcon>
                  <ListItemText>Trang quản trị</ListItemText>
              </MenuItem>
            )}
            <MenuItem component={NavLink} to="/profile">
              <ListItemIcon>
                <span className={clsx("fa fa-user")}/>
              </ListItemIcon>
              <ListItemText>Tài khoản</ListItemText>
            </MenuItem>
            <LogoutButton />   
          </Menu>   
      </div>
    )
  }else{
    return <></>
  }
}
export default memo(Profile);