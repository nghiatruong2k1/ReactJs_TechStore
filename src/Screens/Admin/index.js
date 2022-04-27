import {memo} from 'react';
import clsx from 'clsx';
import {Container,Grid,Stack} from '@mui/material/';
import styles from './styles.module.css';

import Header from "./Screens/Header/";
import Content from "./Screens/Content/";
import Menu from "./Screens/Menu/";
import Logo from "./Screens/Logo/";
import Footer from "./Screens/Footer/";
function AdminPage({...props}){
  return(
    <Container component="section" className={styles.container} maxWidth="false" disableGutters>
      <Grid component="div" container className={styles.body}>
        <Grid item xs={2} className={clsx(styles.col,styles.left)}>
          <Logo />
          <Menu />
        </Grid>
        <Grid item xs={10} className={styles.col}>
          <Stack className={styles.right}>
            <Header />
            <Content />
            <Footer />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
export default memo(AdminPage);