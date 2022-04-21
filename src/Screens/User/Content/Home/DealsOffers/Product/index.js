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
    <Box className={"col-6 col-sm-4 col-lg-3 col-xxl-2"} p={1}>
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
    </Box>
  )
}
export default memo(Product);