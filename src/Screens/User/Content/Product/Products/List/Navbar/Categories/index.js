import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {
  Stack,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton

} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink,useLocation} from "react-router-dom";
import {getRoute} from "../../../../../../../../Config/Route";
import {useFetch} from "../../../../../../../../Config/Fetch/";
function Categories({...props}){

  const [datas,setDatas] = useState([]);
  const [isFetching,setFetching] = useState(false);
  const location = useLocation();
  const Fetch = useFetch();
  useEffect(function() {
    Fetch.get({
          api:"api/category"
          ,onStart:(()=>{
            setDatas(Array(5).fill(undefined));
            setFetching(true);
          })
          ,onEnd:(()=>{
            setFetching(false);
          })
          ,onThen:(result => {
              setDatas(result.data);
          }),onError:(error=> {
              setDatas([])
          })
    })
  },[])
  return(
    <Stack>
      <List 
        disablePadding
        subheader={
          <ListSubheader disableGutters disableSticky component="h6">
            Danh mục
          </ListSubheader>
        }
      >
        {
          datas.map(function(data,index){
            let isActive = false;
            let url = "#";
            if(data){
              url=`${getRoute("user","product","category",{alias:data.Alias})}`;
              if(location.pathname.toLowerCase().indexOf(url.toLowerCase()) !== -1){
                isActive = true;
              }
            }
            return(
              <ListItem key={index} divider disablePadding> 
                {
                  <ListItemButton 
                        component={(Boolean(data) && !isFetching) && NavLink || "span"} 
                        className={clsx({[styles.active]:isActive})}
                        to={url}
                      >                    
                        {(Boolean(data) && !isFetching) 
                          && <ListItemText>{data && data.Name}</ListItemText>
                          || <Skeleton variant="text" className="skeleton"/>
                        }
                  </ListItemButton>
                  
                }
              </ListItem>
            )
          })
        }
      </List>
    </Stack>
  )
}
export default memo(Categories);