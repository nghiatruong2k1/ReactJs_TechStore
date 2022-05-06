import {memo} from 'react';
import clsx from 'clsx';
import {Stack,Grid,Card,CardActions,Typography,CardContent,Divider,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Provider from "./provider";

import InfoContent from "./Info/";
import DetailContent from "./Detail/";
import ProductsContent from "./Products/";
import { formatDate } from '../../../../../../../Config/Format';
function Order({loading,data,index,...props}){
  return(
    <Provider loading={loading} data={data}>
      <Grid item xs={12}>
       <Card>
         <CardContent>
           <Stack direction="row" spacing={5}>
            <Typography sx={{fontWeight:'bold',display:"inline-flex",flex:1}}>
              Mã đơn hàng:
              {
                !loading &&
                  `${data && data.Id}`
                || <Skeleton variant="text" sx={{height:'100%',flex:"1"}} />
              }
            </Typography>
            <Typography sx={{fontWeight:'italic',display:"inline-flex",flex:1}}>
              Ngày đặt hàng: 
              {
                !loading &&
                `${formatDate(data && data.CreateDate)}`
                || <Skeleton variant="text" sx={{height:'100%',flex:"1"}} />
              }
            </Typography>
           </Stack>
         </CardContent>
         <Divider />
         <CardContent>
           <Grid container columnSpacing={3}>
              <InfoContent/>
              <DetailContent/>
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