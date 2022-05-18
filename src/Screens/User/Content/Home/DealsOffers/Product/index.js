import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Badge,
  Rating
} from '@mui/material/';
import {
  Star
} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DealContext} from "../provider";
import {Frame,Image} from "../../../../../../Components/";

import DataName from "./Name/";
import DataBookmask from "./Bookmask/";

function Product({data,loading,...props}){
  return(
    <Grid item sx={{
      flex:{
        xs:"1 0 calc(6 * 100% / 12)",
        sm:"1 0 calc(4 * 100% / 12)",
        md:"1 0 25%",
        lg:"1 0 20%"
      }
    }} p={0.5}>
      <Card style={{height:'100%'}}>
        <CardActions>
          <Frame square loading={loading}>
            <DataBookmask price={data && data.Price} salePrice={data && data.SalePrice}/>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <Divider />
        <CardContent align="center" >
            <DataName loading={loading} name={data && data.Name} alias={data && data.Alias}/>
            <Rating
              value={data && data.Rating || 0}
              readOnly
              size="small" 
              precision={0.1}
              max={5}
              emptyIcon={<Star />}
            />
        </CardContent>
       </Card>
    </Grid>
  )
}
export default memo(Product);