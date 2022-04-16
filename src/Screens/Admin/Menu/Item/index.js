import {memo} from 'react';
import {useLocation} from "react-router-dom";
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material/';
import{NavLink }from'react-router-dom';
import styles from './styles.module.css';
function MenuItem({icon,active,text,to,...props}){
  return(
      <ListItem 
        disablePadding
        className={styles.item}
      >
        <ListItemButton 
          component={NavLink}
          to={`/admin/${to}`}
          className={clsx(styles.button,{[styles.active]:active})}
        >
          <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
          <ListItemText className={styles.text}>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    )
}
export default memo(MenuItem);