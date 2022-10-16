import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container, Grid, Stack } from '@mui/material';

import { BrandsWidget, CategoriesWidget } from '~/screens/widgets';
import { Sidebar } from '~/components';
function ProductsLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} py={2}>
          <Sidebar item xs={3} component={Grid}>
            <Stack spacing={1}>
              <CategoriesWidget divider={true} />
              <BrandsWidget divider={true} />
            </Stack>
          </Sidebar>
          <Grid item xs={9} component={'main'}>
            <>{children}</>
          </Grid>
          <Grid item xs={12}  component={'aside'}>
            <Subscribe />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProductsLayoutComponent);
