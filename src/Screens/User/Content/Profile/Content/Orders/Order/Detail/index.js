import {memo,useContext,useMemo} from 'react';
import {Grid,List,ListItem,ListItemText,Skeleton} from '@mui/material/';
import {OrderContext} from "../provider";
import { formatNumber } from '../../../../../../../../Config/Format';
function Detail({...props}){
  const {data,loading} = useContext(OrderContext);

  const [sale,price] = useMemo(function(){
    if(data){
      return [data.VoucherSale || 0,data.TotalPrice || 0];
    }
    return [0,0]
  },[data])

  return(
    <Grid item xs={4} {...props}>
      <List>
        <ListItem disablePadding>
          <ListItemText>Giá:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? `${formatNumber(price,3,0)} đ`
              : <Skeleton className="skeleton"/>
            }
        </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Giảm giá:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? `${formatNumber(price*sale/100,3,0)} đ`
              : <Skeleton className="skeleton"/>
              }
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Tổng tiền:</ListItemText>
          <ListItemText align="right">
            {
              !loading ? `${formatNumber(price - price*sale/100,3,0)} đ`
              : <Skeleton className="skeleton"/>
            }
          </ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}
export default memo(Detail);