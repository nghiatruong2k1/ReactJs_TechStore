import {memo,Fragment} from 'react';
import {Grid,List,ListSubheader,ListItem,ListItemButton,ListItemIcon,ListItemText,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom";


function FooterList({title,datas,loading,...props}){
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
           {title}
          </ListSubheader>
        }
      >
        {
          Array.isArray(datas) && 
          datas.map(function(data,index){
            return(
              <ListItem disablePadding key={index}> 
                <ListItemButton component={(Boolean(data) && !loading) && NavLink || "span"} to={data && data.to || ""}>
                  {
                    (Boolean(data) && !loading) && (
                    <>
                      <ListItemIcon>{data && data.icon}</ListItemIcon>
                      <ListItemText>{data && data.text}</ListItemText>
                    </>
                    ) ||
                      <Skeleton variant='text' className="skeleton" />
                  } 
                </ListItemButton>
              </ListItem>
            )
          })
        }

      </List>
    </Grid>
  )
};
export default memo(FooterList)