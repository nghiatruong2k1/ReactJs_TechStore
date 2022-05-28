import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Stack,Card,CardContent,CardActions} from '@mui/material/';


import {DetailContext} from "../provider";

import InfoName from "./Name";
import InfoPrice from "./Price";
import InfoSalePrice from "./SalePrice";
import InfoShortDes from "./ShortDes";
import InfoRating from "./Rating";

import InfoQuantity from "./Quantity/";
import InfoAddToCartButton from "./AddToCart";
import InfoContactButton from "./Contact";

function DetailInfo({...props}){
  const {state} = useContext(DetailContext);
  return(
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <CardContent component={Stack} spacing={1}>
          <InfoName loading={state.isLoading} name={state.data.Name} alias={state.data.Alias}/>
          <InfoRating loading={state.isLoading} rating={state.data.Rating}/>
          <Stack direction="row" className="h5" spacing={3} alignItems="center">
            <InfoSalePrice loading={state.isLoading} price={state.data.Price} salePrice={state.data.SalePrice}/>
            <InfoPrice loading={state.isLoading} price={state.data.Price} salePrice={state.data.SalePrice}/> 
          </Stack>
          <InfoShortDes loading={state.isLoading} shortDes={state.data.ShortDes}/>
        </CardContent>
        <CardContent component={Stack} direction="row" spacing={3} alignItems="center">
            <InfoQuantity />
            <InfoAddToCartButton />
            <InfoContactButton />
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(DetailInfo);