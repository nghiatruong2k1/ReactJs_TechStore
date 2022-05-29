import {memo} from 'react';
import {Grid,Card} from '@mui/material/';

import NavCategories from "./Categories";
import NavBrands from "./Brands";
function Navbar({...props}){
  return(
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <NavCategories />
        <NavBrands />
      </Card>
    </Grid>
  )
}
export default memo(Navbar);