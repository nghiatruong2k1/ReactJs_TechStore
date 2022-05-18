import {memo,useContext,Fragment} from 'react';
import {
  Grid,Card,CardContent,List
} from '@mui/material/';

import {ViewContent} from "../../../../../Components/"
import Product from "./Product/";
function View({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
  <Grid item xs {...props}>
    <Card sx={{p:1,height:"100%"}}>
      <CardContent className="text-muted" sx={{
        display:{xs:"none",md:"flex"}
      }}>
        <Grid container className="small text-uppercase">
          <Grid item xs={5}>Sản phẩm</Grid>
          <Grid item xs={2}>Số lượng</Grid>
          <Grid item xs={3}>Giá</Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <ViewContent loading={false} empty="Giỏ hàng của bạn trống" length={cart.handle.getCount()}>
          <List>
          {
            cart.state.datas.map(function(data,index){                 
              if(data){
                return(<Product data={data} index={index} key={index} />)
              }else{
                return <Fragment key={index}></Fragment>
              }
            })
          }
          </List>
        </ViewContent>
      </CardContent>
    </Card>
  </Grid>
  )
}
export default memo(View);