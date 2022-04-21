import {memo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import {Container,Grid,Stack} from '@mui/material/';
import styles from './styles.module.css';

import Header from "./Header/";
import Content from "./Content/";
import Menu from "./Menu/";
import Logo from "./Logo/";
import Footer from "./Footer/";
import Tooldata from "./Tooldata/";
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
            <Tooldata />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
export default memo(AdminPage);