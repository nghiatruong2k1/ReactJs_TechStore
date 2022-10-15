import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container } from '@mui/material';
function DefaultLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" component={'main'}>
        {children}
        <Subscribe />
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(DefaultLayoutComponent);
