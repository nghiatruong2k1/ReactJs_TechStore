import {memo,useReducer,useEffect} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Provider from "./provider";
import {initData,reducer} from "./init";
import ListView from "./List/";
import GridView from "./Grid/";
function ProductsView({action,useHandleGet,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath} action={action}>
    <Grid container py={1} columnSpacing={2}>
        {state.view == 0 && <ListView />}
        {state.view == 1 && <GridView />}
    </Grid>
  </Provider>
  )
}
export default memo(ProductsView);