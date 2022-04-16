import {memo} from 'react';
import {Box,Container,Grid} from '@mui/material/';
import styles from './styles.module.css';

import FooterBrands from "./Brands/";
import FooterCategories from "./Categories/";
import FooterHelps from "./Helps/";
import FooterAccount from "./Account/";
import FooterSocial from "./Social/";
function Footer({...props}){
  return(
  <Box component="section" className={styles.section} pb={10}>
    <Container maxWidth="xxl" component="footer" className={styles.container}>
        <Grid container columnSpacing={2} rowSpacing={1}>
            <FooterBrands xs/>
            <FooterCategories xs/>
            <FooterHelps xs/>
            <FooterAccount xs/>
            <FooterSocial xs/>
        </Grid> 
    </Container>
  </Box>
  )
}
export default memo(Footer);