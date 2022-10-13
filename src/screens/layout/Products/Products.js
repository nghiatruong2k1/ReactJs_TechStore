import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container, Grid, Stack } from '@mui/material';
function ProductsLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" component={'main'}>
        <Stack spacing={2} py={2}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
          <Subscribe />
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProductsLayoutComponent);
