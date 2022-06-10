import {memo} from 'react';
import clsx from 'clsx';
import {Container,Grid,Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {formatDate} from "../../../../Config/Format/";
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
          >
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={styles.title}
              variant="h5"
              align="center"
          >
            
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={styles.title}
              variant="h5"
              align="right"
          >
            
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default memo(Footer);