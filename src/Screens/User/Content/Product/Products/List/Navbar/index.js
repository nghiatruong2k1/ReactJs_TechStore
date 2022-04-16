import {memo} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import NavCategories from "./Categories/";
import NavBrands from "./Brands/";
function Navbar({...props}){
  return(
    <Grid item {...props}>
      <NavCategories />
      <NavBrands />
    </Grid>
  )
}
export default memo(Navbar);