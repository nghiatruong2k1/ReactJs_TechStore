import {memo} from 'react';
import {Grid,Paper} from '@mui/material/';
import {} from '@mui/icons-material/';

import Categories from "./Categories/";
import Slider from "./Slider/";
import Popular from "./Popular/";
function AsideTop({...props}){
  return(
    <Grid container component={Paper} py={2} mt={3} px={1}>
        <Categories sx={{display:{xs:"none",lg:"flex"}}} xs={12} lg={2} px={1}/>
        <Slider xs={12} md={8} lg={7} px={1}/>
        <Popular xs={12} md={4} lg={3} px={1}/>
    </Grid>
  )
}
export default memo(AsideTop);