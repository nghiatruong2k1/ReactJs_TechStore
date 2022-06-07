import {memo,useContext,Fragment} from 'react';
import {
  Grid,Card,CardContent,List
} from '@mui/material/';

import {ViewContent} from "../../../../../../Components"
import Product from "./Product";
function View({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
  <Grid item {...props}>
    <Card sx={{p:1,height:"100%"}}>
      <CardContent sx={{
        display:{xs:"none",md:"flex"},
        py:1
      }}>
        <Grid container display="grid" sx={{
            gridTemplateColumns:"repeat(11,1fr)",
            fontWeight:"bold"
        }}>
          <Grid item gridColumn="1 / 5">Sản phẩm</Grid>       
          <Grid item gridColumn="5 / 7">Giá</Grid>
          <Grid item gridColumn="7 / 9">Số lượng</Grid>
          <Grid item gridColumn="9 / 12"></Grid>
        </Grid>
      </CardContent>
      <CardContent sx={{py:1}}>
        <ViewContent loading={false} empty="Giỏ hàng của bạn trống" length={cart.handle.getCount()}>
          <List>
          {
            cart.state.datas.map(function(data,index){                 
              if(data){
                return(<Product data={data} loading={!Boolean(data)} index={index} key={index} />)
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