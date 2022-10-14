import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container, Grid, Stack } from '@mui/material';

import { BrandsWidget, CategoriesWidget } from '~/screens/widgets';
function ProductsLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" component={'main'}>
        <Grid container spacing={2} py={2}>
          <Grid item xs={3}>
            <Stack spacing={1}>
              <CategoriesWidget divider={true} />
              <BrandsWidget divider={true} />
            </Stack>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <Subscribe />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProductsLayoutComponent);
