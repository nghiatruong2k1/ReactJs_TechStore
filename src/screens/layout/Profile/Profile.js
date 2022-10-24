import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import { Container, Grid, Stack } from '@mui/material';

import { ProfileNavWidget } from '~/screens/widgets';
import { Sidebar } from '~/components';
import { useMediaQuery } from '@mantine/hooks';
function ProfileLayoutComponent({ children }) {
  const isSmallSize = useMediaQuery('(max-width: 650px)');
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} py={2}>
          <Sidebar component={Grid} fixed={isSmallSize} item xs={isSmallSize ? 1 : 3}>
              <ProfileNavWidget divider={true} />
          </Sidebar>
          <Grid item xs={isSmallSize ? 11 : 9} component={'main'}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProfileLayoutComponent);
