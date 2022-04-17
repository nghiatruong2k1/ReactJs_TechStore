import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Grid,Stack} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import VoucherCode from "./VoucherCode/";
import Total from "./Total/";
import View from "./View/";
import Buttons from "./Buttons/";

import {initData,reducer} from "./init";
import Provider from "./provider";

function CartContent({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath}>
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
  </Provider>
  )
}
export default memo(CartContent);