import {memo} from 'react';
import clsx from 'clsx';
import {Stack,Grid,Card,CardActions,Typography,CardContent,Divider,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import Provider from "./provider";

import InfoContent from "./Info/";
import HeadContent from "./Head/";
import DetailContent from "./Detail/";
import ProductsContent from "./Products/";
import { formatDate } from '../../../../../../../Config/Format';
function Order({loading,data,status,index,...props}){
  return(
    <Provider loading={loading} data={data} status={status}>
      <Grid item xs={12}>
       <Card>
         <CardContent>
           <HeadContent />
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