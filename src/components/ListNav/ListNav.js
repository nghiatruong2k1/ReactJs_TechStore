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
function ListNavComponent({ title, datas, loading, ...props }) {
  return (
    <Grid item {...props}>
      <List
        disablePadding
        subheader={
          <ListSubheader
            disableGutters
            disableSticky
            component="b"
            className={styles.title}
          >
            {title}
          </ListSubheader>
        }
      >
        {Array.isArray(datas) &&
          datas.map(function (data, index) {
            const isLoading =  loading || !Boolean(data); 
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  disabled={isLoading}
                  component={(isLoading && 'span') || NavLink}
                  to={(data && data.to) || '/404'}
                  sx={{ py: 0.1,px:0.2 }}
                >
                  {(isLoading && <Skeleton variant="text" />) || (
                    <>
                      <ListItemIcon>{data && data.icon}</ListItemIcon>
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
