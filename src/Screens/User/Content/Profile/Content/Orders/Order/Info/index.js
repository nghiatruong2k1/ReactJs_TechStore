import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,List,ListItem,ListItemText,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {OrderContext} from "../provider";
function Info({...props}){
  const {data,loading} = useContext(OrderContext);
  return(
    <Grid item xs={8} {...props}>
      <List>
        <ListItem disablePadding>
          <ListItemText>Tên người dùng:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? (data && data.FirstName + " " + data && data.LastName)
              : <Skeleton className="skeleton"/>
            }
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Email:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? (data && data.Email)
              : <Skeleton className="skeleton"/>
            }
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Số điện thoại:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? (data && data.Phone)
              : <Skeleton className="skeleton"/>
            }
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Địa chỉ:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? (data && data.Location)
              : <Skeleton className="skeleton"/>
            }
          </ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Info);