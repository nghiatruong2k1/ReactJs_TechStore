import { memo, Fragment } from 'react';
import { Box, Container, Paper, Grid } from '@mui/material/';
import styles from './Footer.module.css';
import FooterSocial from '../widgets/Social';
import FooterHelps from '../widgets/Helps';
import FooterAccount from '../widgets/Account';
import FooterBrands from '../widgets/Brands';
import FooterCategories from '../widgets/Categories';
function FooterComponent({ ...props }) {
  return (
    <Box component="footer" className={styles.section}>
      <Container
        maxWidth="xxl"
        component={Paper}
        sx={{ pb: 6 }}
        className={styles.container}
      >
        <Grid container>
          <FooterHelps xs={12} sm={6} md={3} lg />
          <FooterBrands xs={12} sm={6} md={3} lg />
          <FooterCategories xs={12} sm={6} md={3} lg />
          <FooterAccount xs={12} sm={6} md={3} lg />
          <FooterSocial xs={12} sm={6} md={3} lg />
        </Grid>
      </Container>
    </Box>
  );
}
export default memo(FooterComponent);
