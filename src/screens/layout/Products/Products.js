import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container, Grid} from '@mui/material';

import { BrandsWidget, CategoriesWidget } from '~/screens/widgets';
import { Sidebar } from '~/components';
import { useMediaQuery } from '@mantine/hooks';
function ProductsLayoutComponent({ children }) {
  const isSmallSize = useMediaQuery('(max-width: 650px)');
  return (
    <Fragment>
      <Header />
      
      <Container maxWidth="lg">
        <Grid container spacing={2} py={2}>
          <Sidebar item xs={isSmallSize ? 1 : 3} component={Grid} fixed={isSmallSize}>
            <>
              <CategoriesWidget divider={true} />
              <BrandsWidget divider={true} />
            </>
          </Sidebar>
          <Grid item xs={isSmallSize ? 11 : 9} component={'main'}>
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
