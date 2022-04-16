import {memo,useState,useEffect} from 'react';
import {
  Grid
  ,List
  ,ListSubheader
  ,ListItem
  ,ListItemButton
  ,ListItemText
  ,Skeleton
} from '@mui/material/';
import {NavLink} from "react-router-dom"
function Brands({...props}){
  const [datas,setDatas] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const Fetch = global.config.useFetch();
  const route = global.config.route;
  useEffect(function() {
    Fetch.get({
      api:"api/brand"
      ,onStart:(()=>{
        setDatas(Array(5).fill(undefined));
        setLoading(true);
      })
      ,onEnd:(()=>{
        setLoading(false);
      })
      ,onThen:(result => {
          setDatas(result.data ?? []);
      }),onError:(error=> {
          setDatas([])
      })
    })
  },[])
  return(
    <Grid item {...props}>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Thương hiệu
          </ListSubheader>
        }
      >
        {
          datas.map(function(data,index){
            return(
              <ListItem key={index} disablePadding> 
                {
                  (data && !isLoading) 
                  && (<ListItemButton 
                    component={NavLink} 
                    to={route.user.product.category+"/"+data.Alias}
                  >
                    <ListItemText>{data.Name}</ListItemText>
                  </ListItemButton>)
                  || <Skeleton variant="text" height = '2em' width="100%"/>
                }
              </ListItem>
            )
          })
        }
      </List>
    </Grid>
  )
}
export default memo(Brands);