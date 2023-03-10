import { memo } from 'react';
import { Box, Container, Paper, Grid } from '@mui/material/';
import styles from './Footer.module.css';
import ListSocial from '../widgets/Social';
import ListHelps from '../widgets/Helps';
import ListAccount from '../widgets/Account';
import ListBrands from '../widgets/Brands';
import ListCategories from '../widgets/Categories';
function FooterComponent({ ...props }) {
  return (
    <Box component="footer" className={styles.section}>
      <Container
        maxWidth="xxl"
        component={Paper}
        className={styles.container}
      >
        <Grid container>
          <ListHelps item  xs={12} sm={6} md={3} lg />
          <ListBrands item  xs={12} sm={6} md={3} lg />
          <ListCategories item  xs={12} sm={6} md={3} lg />
          <ListAccount item  xs={12} sm={6} md={3} lg />
          <ListSocial item  xs={12} sm={6} md={3} lg />
        </Grid>
      </Container>
    </Box>
  );
}
export default memo(FooterComponent);
