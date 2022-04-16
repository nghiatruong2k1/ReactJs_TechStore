import {memo} from 'react';
import {Grid
  ,List
  ,ListSubheader
  ,ListItem
  ,ListItemButton
  ,ListItemText
  ,ListItemIcon
} from '@mui/material/';
import {NavLink} from "react-router-dom"
function Brands({...props}){
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Account
          </ListSubheader>
        }
      >
        <ListItem disablePadding> 
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon></ListItemIcon>
            <ListItemText></ListItemText> 
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Brands);