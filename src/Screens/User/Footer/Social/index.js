import {memo} from 'react';
import {Grid,List,ListSubheader,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material/';

import {NavLink} from "react-router-dom"
function Social({...props}){
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Social
          </ListSubheader>
        }
      >
        <ListItem disablePadding> 
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon><i className="fab fa-facebook"></i></ListItemIcon>
            <ListItemText>Facebook</ListItemText> 
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon><i className="fab fa-twitter"></i></ListItemIcon>
            <ListItemText>Twitter</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon><i className="fab fa-instagram"></i></ListItemIcon>
            <ListItemText>Instagram</ListItemText> 
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon><i className="fab fa-youtube"></i></ListItemIcon>
            <ListItemText>Youtube</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Social);