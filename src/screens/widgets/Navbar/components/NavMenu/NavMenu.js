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
function NavMenu({ datas, loading, children,vertical, onClose }) {
  return (
    <Stack component={List} direction={vertical ? 'column' : 'row'} sx={{ p: 0 }}>
      {Array.isArray(datas) &&
        datas.map(
          ({ to, text, icon, disabled, children, onClick }, index) => {
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
                  disabled={disabled}
                  component={(to && !loading && NavLink) || 'button'}
                  to={to || '#'}
                  className={styles.button}
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
