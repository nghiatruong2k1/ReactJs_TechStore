import {memo} from 'react';
import {Stack,Skeleton,List,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";

import NavItem from '../NavItem';
function NavMenu({fixed,datas,loading,children,onClose,sx,...props}){
  return(
  <Stack component={List} 
    direction={fixed && "column" || "row"} 
    sx={{flex:"auto",p:0,...sx}} 
    {...props}
  >
    {
       Array.isArray(datas) && 
       datas.map(({to,text,icon,style,children,onClick},index)=>{
         return(
          <NavItem 
            key={index} 
            fixed={fixed} 
            component={(to && !loading && NavLink) || "button"} 
            to={to || "#"}
            onClick={(e)=>{
              onClick && onClick(e);
              !children && onClose && onClose(e); 
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primaryTypographyProps={{sx:{fontWeight:'bold'}}}>
              {
                (!loading && (text || "")) || <Skeleton className="skeleton"/>
              }
            </ListItemText>
            {children}
          </NavItem>
         )
       })
    }
    {children}
  </Stack>
  )
}
export default memo(NavMenu);