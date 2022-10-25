import { memo } from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import styles from '../Navbar.module.css';
function NavbarItem({ icon, activeIcon, isActive, text, ...props }) {
  return (
    <ListItem disablePadding divider className={styles.item}>
      <ListItemButton
        {...props}
        component={(props.to && Link) || 'span'}
        className={clsx(styles.button)}
      >
        <ListItemIcon className={styles.icon}>
          {(isActive && activeIcon) || icon}
        </ListItemIcon>
        <ListItemText className={styles.text}>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
export default memo(NavbarItem);
