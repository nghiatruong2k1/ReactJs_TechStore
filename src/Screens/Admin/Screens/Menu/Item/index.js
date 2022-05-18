import {memo,useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material/';
import{NavLink }from'react-router-dom';
import styles from '../styles.module.css';
function MenuItem({icon,activeIcon,text,to,...props}){
  const [isActive,setActive] = useState(false);
  const location = useLocation();
  useEffect(function(){
    if(to){
      const index = location.pathname.toString().indexOf(to);
      if(index === 0){
        setActive(true);
      }else{
        setActive(false)
      }
    }else{
      setActive(false)
    }
  },[location])
  return(
      <ListItem 
        disablePadding
        className={styles.item}
      >
        <ListItemButton 
          component={NavLink}
          to={to || "/"}
          className={clsx(styles.button,{[styles.active]:isActive})}
        >
          <ListItemIcon className={styles.icon}>{isActive && activeIcon || icon}</ListItemIcon>
          <ListItemText className={styles.text}>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    )
}
export default memo(MenuItem);