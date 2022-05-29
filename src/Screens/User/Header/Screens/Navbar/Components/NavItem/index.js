import {memo,Fragment,forwardRef} from 'react';
import {ListItem,ListItemButton} from '@mui/material/';
function NavItem({fixed,styles,onClick,children,...props},ref){
    return (
        <ListItem ref={ref} divider={fixed} disablePadding sx={{width:"auto"}}>
             <ListItemButton onClick={(e)=>{onClick && onClick(e)}}
                style={{fontWeight:"bold",p:0,color:"#333"}}
                {...props}
             >
                 {children}
              </ListItemButton>
        </ListItem>
    )
};export default memo(forwardRef(NavItem))