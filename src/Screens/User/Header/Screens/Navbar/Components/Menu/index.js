import {memo} from 'react';
import {Stack,Box,Button,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom";

function NavMenu({fixed,datas,loading,children,onClose,...props}){
  return(
  <Stack component="ul" direction={fixed && "column" || "row"} flex="1" {...props}>
    {
       Array.isArray(datas) && 
       datas.map(({to,text,style,children,onClick,...propsItem},index)=>{
         return(
           <Box component="li" key={index}>
             <Button onClick={(e)=>{
               !children && onClose && onClose(e);
               onClick && onClick(e);
             }} component={ !loading && NavLink || "button" } to={to || "#"}
              style={{
                width:"100%",
                fontWeight:"bold",
                color:"#333",
                justifyContent:fixed && "space-between" || "center",
                ...style
              }}
              {...propsItem}
             >
                {
                  !loading && (text || "")
                  || <Skeleton className="skeleton"/>
                }
              </Button>
              {children}
           </Box>
         )
       })
    }
    {children}
  </Stack>
  )
}
export default memo(NavMenu);