import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import { Container, Grid, Stack } from '@mui/material';

import { ProfileNavWidget } from '~/screens/widgets';
import { Sidebar } from '~/components';
function ProfileLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} py={2}>
          <Sidebar component={Grid} item xs={3}>
            <Stack spacing={1}>
              <ProfileNavWidget divider={true} />
            </Stack>
          </Sidebar>
          <Grid item xs={9} component={'main'}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProfileLayoutComponent);
