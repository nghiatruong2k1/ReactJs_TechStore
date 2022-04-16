import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Stack} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import VoucherCode from "./VoucherCode/";
import Total from "./Total/";
import View from "./View/";
import Buttons from "./Buttons/";


function CartContent({...props}){
  return(
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8} >
        <View />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack spacing={2}>
          <VoucherCode />
          <Total />
          <Buttons />
        </Stack>
      </Grid>
    </Grid>
  )
}
export default memo(CartContent);