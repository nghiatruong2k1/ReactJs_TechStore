import {memo} from 'react';
import {
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton

} from '@mui/material/';
import {NavLink,useLocation} from "react-router-dom";
import { getRoute } from '../../../../../../../../../../Config/Route';
import {useGet} from "../../../../../../../../../../Config/Fetch/";
function Categories({...props}){
  const location = useLocation();
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
    <CardContent>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Thương hiệu
          </ListSubheader>
        }
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
              <ListItem key={index} divider disablePadding> 
                {
                  <ListItemButton 
                    component={((Boolean(item) && !isLoading) && NavLink) || "button"} 
                    to={url}
                  >                    
                    {(Boolean(item) && !isLoading) 
                      && <ListItemText primaryTypographyProps={{sx:{fontWeight: isActive && 'bold' || "400"}}}>{item && item.Name}</ListItemText>
                      || <Skeleton variant="text" className="skeleton"/>
                    }
                  </ListItemButton>
                  
                }
              </ListItem>
            )
          })
        }
      </List>
    </CardContent>
  )
}
export default memo(Categories);