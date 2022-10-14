import { memo, Fragment } from 'react';
import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import styles from './ListNav.module.css';
function ListNavComponent({ title, datas, icon, loading, divider, ...props }) {
  return (
    <Grid {...props}>
      <List
        disablePadding
        subheader={
          title && (
            <ListSubheader
              disableGutters
              disableSticky
              component="b"
              className={styles.title}
            >
              {`${title}:`}
            </ListSubheader>
          )
        }
      >
        {Array.isArray(datas) &&
          datas.map(function (data, index) {
            const isLoading = loading || !Boolean(data);
            return (
              <ListItem disablePadding key={index} divider={divider}>
                <ListItemButton
                  disabled={isLoading}
                  component={
                    (!isLoading && data && data.to && NavLink) || 'span'
                  }
                  to={(data && data.to) || '/404'}
                  sx={{ py: '0.1em', px: '0.5em' }}
                >
                  {(isLoading && <Skeleton variant="text" />) || (
                    <>
                      {icon !== false && (
                        <ListItemIcon>
                          {(data && data.icon) || icon}
                        </ListItemIcon>
                      )}
                      <ListItemText>{data && data.text}</ListItemText>
                    </>
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Grid>
  );
}
export default memo(ListNavComponent);
