import {memo} from 'react';
import {Grid,Paper} from '@mui/material/';

import Categories from "./Categories/";
import Slider from "./Slider/";
import Popular from "./Popular/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  console.log(theme)
  return {
    container:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);
function AsideTop({...props}){
  const styles = useStyles();
  return(
    <Grid container component={Paper} className={styles.container} py={1} px={1}>
        <Categories sx={{display:{xs:"none",lg:"flex"}}} xs={12} lg={2} px={1}/>
        <Slider xs={12} md={8} lg={7} px={1}/>
        <Popular xs={12} md={4} lg={3} px={1}/>
    </Grid>
  )
}
export default memo(AsideTop);