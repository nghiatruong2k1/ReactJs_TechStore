import {memo,useReducer} from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Skeleton
} from '@mui/material/';
import {NavLink} from "react-router-dom";

import {initData,reducer} from './init'
import Provider from "./provider";
import {getRoute} from "../../../../../../Config/Route/";
function Categories({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Grid item {...props}>
      <List disablePadding
        sx={{width:"100%"}}
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
                    to={`${getRoute("user","product","category",{alias:data && data.Alias})}`}
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