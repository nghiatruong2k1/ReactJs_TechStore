import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import Subscribe from '~/screens/Subscribe';
import { Container, Stack } from '@mui/material';
function DefaultLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" component={'main'}>
        <Stack spacing={2} py={2}>
          {children}
          <Subscribe />
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(DefaultLayoutComponent);
