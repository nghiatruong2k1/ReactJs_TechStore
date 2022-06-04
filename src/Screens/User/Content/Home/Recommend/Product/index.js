import {memo,useContext} from 'react';
import {
  Grid,
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Rating
} from '@mui/material/';
import {
  Star
} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../../Components/";

import DataName from "./Name/";
import DataPrice from "./Price/";
import DataSalePrice from "./SalePrice/";
import DataBookmask from "./Bookmask/";

import useStyles from './styles';
function RecommendProduct({data,loading,...props}){
  const styles = useStyles();
  return(
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
      <Card sx={styles.card}>
        <CardActions>
          <Frame square loading={!Boolean(data) || loading}>
            <DataBookmask price={data && data.Price} salePrice={data && data.SalePrice}/>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <Divider />
        <CardContent align="center">
            <DataName loading={!Boolean(data)|| loading} name={data && data.Name} alias={data && data.Alias}/>
            <Rating
              value={data && data.Rating || 0}
              readOnly
              size="small"
              precision={0.1}
              max={5}
              emptyIcon={<Star />}
            />
            <DataPrice loading={!Boolean(data)|| loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
            <DataSalePrice loading={!Boolean(data)|| loading} price={data && data.Price} salePrice={data && data.SalePrice}/>
        </CardContent>
       </Card>
    </Grid>
  )
}
export default memo(RecommendProduct);