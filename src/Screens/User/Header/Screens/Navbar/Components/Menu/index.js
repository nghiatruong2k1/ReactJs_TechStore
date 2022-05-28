import {memo} from 'react';
import {Stack,Box,Button,Skeleton,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material/';
import {NavLink} from "react-router-dom";

function NavMenu({fixed,datas,loading,children,onClose,sx,...props}){
  return(
  <Stack component={List} 
    direction={fixed && "column" || "row"} 
    sx={{flex:"auto",...sx}} 
    {...props}
  >
    {
       Array.isArray(datas) && 
       datas.map(({to,text,style,children,onClick,...propsItem},index)=>{
         return(
           <ListItem key={index} divider={fixed} disablePadding sx={{width:"auto"}}>
             <ListItemButton onClick={(e)=>{
               !children && onClose && onClose(e);
               onClick && onClick(e);
             }} component={ !loading && NavLink || "button" } to={to || "#"}
              style={{
                fontWeight:"bold",
                p:0,
                color:"#333",
                ...style
              }}
              {...propsItem}
             >
                <ListItemIcon></ListItemIcon>
                <ListItemText>
                  {
                    !loading && (text || "") || <Skeleton className="skeleton"/>
                  }
                </ListItemText>
              </ListItemButton>
              {children}
           </ListItem>
         )
       })
    }
    {children}
  </Stack>
  )
}
export default memo(NavMenu);