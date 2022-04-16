import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,List,ListItem,ListItemText} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {OrderContext} from "../provider";
function Info({...props}){
  const {data} = useContext(OrderContext);
  return(
    <Grid item xs={8}>
      <List>
        <ListItem disablePadding>
          <ListItemText>Tên người dùng:</ListItemText>
          <ListItemText align="right">{data.FirstName + " " + data.LastName}</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Email:</ListItemText>
          <ListItemText align="right">{data.Email}</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Số điện thoại:</ListItemText>
          <ListItemText align="right">{data.Phone}</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Địa chỉ:</ListItemText>
          <ListItemText align="right">{data.Location}</ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Info);