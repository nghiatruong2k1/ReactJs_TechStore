import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,List,ListItem,ListItemText} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {OrderContext} from "../provider";
function getColorStatus(id){
  if(id == 1){
    return "#9ea7ad"
  }else if(id == 2){
    return "#2dccff"
  }else if(id == 3){
    return "#56f000"
  }else if(id == 4){
    return "#ff3838"
  }
}
function Detail({...props}){
  const {data} = useContext(OrderContext);
  return(
    <Grid item xs={4}>
      <List>
        <ListItem disablePadding>
          <ListItemText>Giảm giá:</ListItemText>
          <ListItemText align="right">0%</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Tổng tiền:</ListItemText>
          <ListItemText align="right">{global.config.formatNumber(data.TotalPrice,3,0)} đ</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Trạng thái:</ListItemText>
          <ListItemText align="right" sx={{color:getColorStatus(data.StatusId)}}>{data.StatusName}</ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Detail);