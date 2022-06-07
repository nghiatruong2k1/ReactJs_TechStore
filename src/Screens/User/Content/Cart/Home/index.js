import {memo,useReducer} from 'react';

import {Grid} from '@mui/material/';


import Voucher from "./Voucher";
import Total from "./Total";
import View from "./View";
import Buttons from "./Buttons";

import {initData,reducer} from "./init";
import Provider from "./provider";

function CartContent({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath}>
    <Grid container display="grid" sx={{
      gridTemplateColumns:"repeat(11,1fr)"
    }}>
      <View p={1} sx={{
        gridColumn:{
          xs:"1 / 12",
          lg:"1 / 9"
        },gridRow:{
          lg:"1 / span 3"
        }
      }}/>
      <Voucher p={1} sx={{
        gridColumn:{
          xs:"1 / 12",
          sm:"1 / 7",
          lg:"9 / 12"
        }
      }}/>
      <Total p={1} sx={{
        gridColumn:{
          xs:"1 / 12",
          sm:"7 / 12",
          lg:"9 / 12"
        }
      }}/>
      <Buttons p={1} sx={{
        gridColumn:{
          xs:"1 / 12",
          lg:"9 / 12"
        }
      }}/>
    </Grid>
  </Provider>
  )
}
export default memo(CartContent);