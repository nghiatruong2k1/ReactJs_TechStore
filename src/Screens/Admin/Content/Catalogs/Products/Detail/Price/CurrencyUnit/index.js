import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Provider from "./provider";
import CurrencyInput from "./Input";

function Currency({left,right,...props}){
  return(
  <Provider>
    <Grid container alignItems="center">
        <Grid item {...left}>
          <Typography>Currency Unit</Typography>
        </Grid>
        <Grid item {...right}>
          <CurrencyInput />
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(Currency);