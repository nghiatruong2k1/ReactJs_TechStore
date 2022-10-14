import { memo, Fragment } from 'react';
import Header from '~/screens/Header';
import Footer from '~/screens/Footer';
import { Container, Grid, Stack } from '@mui/material';

import {ProfileNavWidget} from '~/screens/widgets';
function ProfileLayoutComponent({ children }) {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" component={'main'}>
        <Grid container spacing={2} py={2}>
          <Grid item xs={9}>
            {children}
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1}>
              <ProfileNavWidget divider={true}/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default memo(ProfileLayoutComponent);
