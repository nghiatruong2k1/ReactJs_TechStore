import { memo } from 'react';
import {
  Stack,
  Skeleton,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemButton,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import clsx from 'clsx';
function NavMenu({ datas, loading, children,vertical, onClose }) {
  return (
    <Stack component={List} direction={vertical ? 'column' : 'row'} sx={{ p: 0 }}>
      {Array.isArray(datas) &&
        datas.map(
          ({  text, icon, children, onClick ,className,...items }, index) => {
            return (
              <ListItem
                key={index}
                className={styles.item}
                disablePadding
                sx={{width: vertical ? '100%' :'fit-content'  }}
                onClick={(e) => {
                  onClick && onClick(e);
                  !children && onClose && onClose(e);
                }}
              >
                <ListItemButton
                  component={(items.to && !loading && NavLink) || 'button'}
                  className={  clsx(styles.button,className)}
                  {...items}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText>
                    {(!loading && (text || '#')) || (
                      <Skeleton className="skeleton" />
                    )}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          },
        )}
      {children}
    </Stack>
  );
}
export default memo(NavMenu);
