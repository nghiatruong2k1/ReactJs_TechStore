import {memo,useState,useRef,useReducer,useContext,useEffect} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Button,Tooltip,Badge,Paper,Menu,MenuItem,ListItemButton,ListItemIcon,ListItemText,Avatar} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from '../styles.module.css';
import {initData,reducer} from "./init";



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

function LogoutButton({...props}){
  const {toast} = useContext(global.config.context);
  const [cookies,setCookies,removeCookies] = useCookies();
  function handleClick(){
    removeCookies("token")
    if(Boolean(cookies['token'])){
      toast.handle.add({message:"Đăng xuất không thành công!",type:"warning"})
    }else{
      toast.handle.add({message:"Đăng xuất thành công!"})
    }

  }
  return(
    <ProfileLink to="" 
      onClick={handleClick}
      icon={<span className={clsx("fas fa-sign-out-alt")}/>}
      text={"Đăng xuất"}
    />
  )
}

function Profile({...props}){
  const {getRoute} = global.config.useRoute();
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
            open={Boolean(buttonRef.current && isOpen)}
            onClose={handleClose}
            width = '10em'
            MenuListProps={{
              sx:{
                padding:"0.5em"
              }
            }}
          >
            {(state.TypeId == 4) && (
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
      </div>
    )
  }else{
    return <></>
  }
}
export default memo(Profile);