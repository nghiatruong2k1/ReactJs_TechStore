import {memo} from 'react';
import clsx from 'clsx';
import {Box,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Categories from "./Categories/";
import Slider from "./Slider/";
import Popular from "./Popular/";
function AsideTop({...props}){
  return(
    <Grid container className={styles.content} py={2} mt={3} px={1}>
        <Categories lg={2} px={1}/>
        <Slider xs={12} lg={7} px={1}/>
        <Popular lg={3} px={1}/>
    </Grid>
  )
}
export default memo(AsideTop);