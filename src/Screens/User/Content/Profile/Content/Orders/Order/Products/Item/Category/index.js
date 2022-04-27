import {memo,useContext} from 'react';
import {Typography,Skeleton} from '@mui/material/';
import {ItemContext} from "../provider";
function ItemCategory({...props}){
  const {data,loading} = useContext(ItemContext);
  if(!loading){
    return(
      <Typography>{data && data.CategoryName}</Typography>
    )
  }else{
    return(
      <Skeleton width="100%"/>
    )
  }
}
export default memo(ItemCategory);