import {memo,useState,useRef} from 'react';
import clsx from 'clsx';
import {
  Menu,
  MenuItem,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Skeleton
} from '@mui/material/';
import {KeyboardArrowDown} from '@mui/icons-material/';
import {NavLink,useLocation} from "react-router-dom";
import {getRoute} from "../../../../../../../../../../Config/Route/";
import {useGet} from "../../../../../../../../../../Config/Fetch/";
function Brands({...props}){
  const location = useLocation();
  const [isOpen,setOpen] = useState(false);
  const thisRef = useRef();
  const [{data,isLoading}] = useGet([],function(){
    return{
      api:"api/brand"
      ,onStart:(()=>{
        return Array(5).fill(undefined)
      })
      ,onThen:(result => {
        return (Array.isArray(result.data) && result.data) || [] 
      })
    }
  },[])
  return(
    <>
      <ListItem ref={thisRef} sx={{width:'auto',p:0}}>
       <ListItemButton onClick={()=>(setOpen(true))}>
        <ListItemText>Thương hiệu</ListItemText>
        <ListItemIcon><KeyboardArrowDown /></ListItemIcon>
       </ListItemButton>
      </ListItem>
      <Menu
        anchorEl={thisRef.current}
        open={thisRef.current && isOpen}
        onClose={()=>{setOpen(false)}}
        MenuListProps={{sx:{p:1}}}
      >
      {
          data.map(function(item,index){
            let isActive = false;let url = "#";
            if(item){
              url=`${getRoute("user","product","brand",{alias:item.Alias})}`;
              if(location.pathname.toLowerCase().indexOf(url.toLowerCase()) !== -1){
                isActive = true;
              }
            }
            return(
              <MenuItem key={index} divider sx={{p:0}}> 
                {
                  <ListItemButton 
                    component={(Boolean(item) && !isLoading) && NavLink || "button"} 
                    to={url}
                  >                    
                    {(Boolean(item) && !isLoading) 
                      && <ListItemText primaryTypographyProps={{sx:{fontWeight: isActive && 'bold' || "400"}}}>{item && item.Name}</ListItemText>
                      || <Skeleton variant="text" className="skeleton"/>
                    }
                  </ListItemButton>
                  
                }
              </MenuItem>
            )
          })
        }
      </Menu>
    </>
  )
}
export default memo(Brands);
/*


 */