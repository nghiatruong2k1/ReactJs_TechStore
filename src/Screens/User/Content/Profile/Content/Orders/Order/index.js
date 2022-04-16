import {memo} from 'react';
import clsx from 'clsx';
import {Stack,Grid,Card,CardActions,Typography,CardContent,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Provider from "./provider";

import InfoContent from "./Info/";
import DetailContent from "./Detail/";
import ProductsContent from "./Products/";
function Order({data,index,...props}){
  return(
    <Provider data={data}>
      <Grid item xs={12}>
       <Card>
         <CardContent>
           <Stack direction="row" justifyContent = 'space-between' spacing={5}>
             <Typography sx={{fontWeight:'bold'}}>Mã đơn hàng: {data.Id}</Typography>
             <Typography>Ngày đặt hàng: {global.config.formatDate(data.CreateDate)}</Typography>
           </Stack>
         </CardContent>
         <Divider />
         <CardContent>
           <Grid container columnSpacing={2}>
              <InfoContent />
              <DetailContent />
           </Grid>
         </CardContent>
         <Divider />
         <CardContent>
           <ProductsContent />
         </CardContent>
       </Card>
      </Grid>
    </Provider>
  )
}
export default memo(Order);