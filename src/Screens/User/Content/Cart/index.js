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
    <Grid container display="grid">
      <View p={1} sx={{
        gridColumn:{
          lg:"1 / 2"
        },gridRow:{
          lg:"1 / span 3"
        }
      }}/>
      <VoucherCode p={1} sx={{
        gridColumn:{
          lg:"2 / 3"
        }
      }}/>
      <Total p={1} sx={{
        gridColumn:{
          lg:"2 / 3"
        }
      }}/>
      <Buttons p={1} sx={{
        gridColumn:{
          lg:"2 / 3"
        }
      }}/>
    </Grid>
  </Provider>
  )
}
export default memo(CartContent);