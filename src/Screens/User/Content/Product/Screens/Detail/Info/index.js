import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Stack,Rating} from '@mui/material/';
import {Star} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../provider";

import InfoName from "./Name";
import InfoPrice from "./Price";
import InfoSalePrice from "./SalePrice";
import InfoShortDes from "./ShortDes";

import InfoQuantity from "./Quantity/";
import InfoAddToCartButton from "./AddToCart";
import InfoContactButton from "./Contact";

function DetailInfo({...props}){
  const {state} = useContext(DetailContext);
  return(
    <Grid item {...props}>
      <Stack spacing={2}>
        <InfoName />
        <Stack direction="row" spacing={2} alignItems="center">
          <Rating
            value={state.data && state.data.rating || 0}
            readOnly
            size="small"
            precision={0.1}
            max={5}
            emptyIcon={<Star />}
          />
        </Stack>
        <Stack direction="row" className="h5" spacing={3} alignItems="center">
          <InfoSalePrice />
          <InfoPrice />
        </Stack>
        <InfoShortDes />
        <Stack direction="row" spacing={3} alignItems="center">
            <InfoQuantity />
            <InfoAddToCartButton />
            <InfoContactButton />
        </Stack>
      </Stack>
    </Grid>
  )
}
export default memo(DetailInfo);