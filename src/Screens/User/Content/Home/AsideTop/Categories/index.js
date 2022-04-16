import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Skeleton
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";

import {initData,reducer} from './init'
import Provider from "./provider";
function Categories({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const route = global.config.route;
  return(
    <Provider state={state} dispath={dispath}>
      <Grid item {...props}>
      <List disablePadding
        subheader={
          <ListSubheader align="center" disableGutters disableSticky component="h6">
            Danh mục
          </ListSubheader>
        }
      >
        {
          state.datas.map(function(data,index){
            return(
              <ListItem divider key={index} disablePadding> 
                {
                  <ListItemButton 
                    component={(data && !state.isLoading) && NavLink || "button"} 
                    to={`${route.user.product.category}/${data && data.Alias}`}
                  >
                    {
                      (data && !state.isLoading) 
                      && <ListItemText>{data && data.Name}</ListItemText>
                      || <Skeleton variant="text" className="skeleton"/> 
                    }
                  </ListItemButton>
                }
              </ListItem>
            )
          })
        }
      </List>
    </Grid>
    </Provider>
  )
}
export default memo(Categories);