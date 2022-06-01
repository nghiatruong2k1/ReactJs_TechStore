import {memo,Fragment,forwardRef} from 'react';
import {ListItem,ListItemButton} from '@mui/material/';
function NavItem({fixed,styles,onClick,children,...props},ref){
    return (
        <ListItem ref={ref} divider={fixed} disablePadding sx={{width:"auto"}}>
             <ListItemButton onClick={(e)=>{onClick && onClick(e)}}
                style={{p:0}}
                {...props}
             >
                 {children}
              </ListItemButton>
        </ListItem>
    )
};export default memo(forwardRef(NavItem))