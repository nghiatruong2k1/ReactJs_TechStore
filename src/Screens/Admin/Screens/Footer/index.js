import {memo} from 'react';
import clsx from 'clsx';
import {Container,Grid,Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Footer({...props}){
  return(
    <Container
        component="footer"
        className={styles.footer}
    >
      <Grid container component="footer"
        className={styles.footer} alignItems = 'center'>
        <Grid item xs>
          <Typography className={styles.title}
              variant="h5"
              align="left"
          >Powered by nopCommerce
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={styles.title}
              variant="h5"
              align="center"
          >Tuesday, March 08, 2022 1:38 AM
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={styles.title}
              variant="h5"
              align="right"
          >nopCommerce version 4.50.0
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default memo(Footer);