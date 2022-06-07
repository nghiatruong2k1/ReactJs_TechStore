import {memo,Fragment} from 'react';
import {Box,Container,Paper,Grid} from '@mui/material/';

import FooterBrands from "./Screens/Brands/";
import FooterCategories from "./Screens/Categories/";
import FooterHelps from "./Screens/Helps/";
import FooterAccount from "./Screens/Account/";
import FooterSocial from "./Screens/Social/";


import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    section:{
      background:`${theme.palette.background.default} !important`
    },container:{
      color:"#fff !important",
      backgroundColor:"var(--help) !important"
    }
  }}
);

function Footer({...props}){
  const styles = useStyles();
  return(
  <Box component="footer" pt={2} className={styles.section}>
    <Container maxWidth="xxl" component={Paper} sx={{pb:6}} className={styles.container}>
        <Grid container columnSpacing={2} rowSpacing={1}>
            <FooterHelps xs={12} sm={6} md={3} lg/>
            <FooterBrands xs={12} sm={6} md={3} lg/>
            <FooterCategories xs={12} sm={6} md={3} lg/>
            <FooterAccount xs={12} sm={6} md={3} lg/>
            <FooterSocial xs={12} md={3} lg/>
        </Grid> 
    </Container>
  </Box>
  )
}
export default memo(Footer);

