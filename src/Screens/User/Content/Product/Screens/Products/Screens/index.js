import {memo,useReducer,useEffect} from 'react';
import {Grid} from '@mui/material/';

import Provider from "./provider";
import ListView from "../Components/List/";
import GridView from "../Components/Grid/";
function ProductsView({state,...props}){
  return(
  <Provider state={state} {...props}>
    <Grid container py={1} spacing={1}>
        {state.view == 0 && <ListView />}
        {state.view == 1 && <GridView />}
    </Grid>
  </Provider>
  )
}
export default memo(ProductsView);