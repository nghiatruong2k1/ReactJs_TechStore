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
import {getRoute} from "../../../../../../Config/Route/";
import {useGet} from "../../../../../../Config/Fetch/";
function Categories({...props}){
  const [state] = useGet([],function(){
    return {
      api:"api/category"
      ,onStart:(()=>{
        return Array(5).fill(undefined);
      })
    }
  },[],"Home Aside Categories");
  return(
    <>
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
          Array.isArray(state.data) && 
          state.data.map(function(data,index){
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
    </>
  )
}
export default memo(Categories);