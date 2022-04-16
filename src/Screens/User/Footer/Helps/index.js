import {memo} from 'react';
import {Grid
  ,List
  ,ListSubheader
  ,ListItem
  ,ListItemButton
  ,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom"
function Helps({...props}){
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Helps
          </ListSubheader>
        }
      >
        <ListItem disablePadding> 
          <ListItemButton component={NavLink} to="/">
            <ListItemText>Adidas</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemText>Adidas</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemText>Adidas</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemText>Adidas</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Helps);