import { memo, useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material/';
import styles from './Header.module.css';
import {
  AuthWidget,
  LogoWidget,
  NavbarWidget,
  SearchWidget,
  CartWidget,
} from '~/screens/widgets';
import { controllers } from './init';
import HeaderOption from './HeaderOption';
import clsx from 'clsx';
const bodyRoot = document.getElementById('root');
function HeaderComponent() {
  const [isFixed, setFixed] = useState(false);
  const thisRef = useRef();
  useEffect(function () {
    const heightTop = thisRef.current.offsetHeight;
    function handleScroll(event) {
      let scrollTop = bodyRoot.scrollTop;
      if (scrollTop > 0) {
        setFixed(true);
        thisRef.current.style.height = heightTop + 'px';
      } else {
        setFixed(false);
        thisRef.current.style.height = 'auto';
      }
    }
    bodyRoot.addEventListener('scroll', handleScroll);
    return function () {
      bodyRoot.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box component="header" ref={thisRef}>
      <Container
        maxWidth="xxl"
        component={Paper}
        className={clsx(styles.container, { popup: isFixed })}
        sx={{
          zIndex: 10,
          position: { xs: 'fixed', sm: (isFixed && 'fixed') || 'relative' },
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Grid container py={0.5} alignItems="center" spacing={1}>
          <Grid item xs={2}>
            <LogoWidget height="3em" />
          </Grid>
          <Grid item xs />
          <Grid item xs={4}>
            <SearchWidget controllers={controllers} />
          </Grid>
          <AuthWidget toggleComponent={HeaderOption} />
          <CartWidget toggleComponent={HeaderOption} />
          <NavbarWidget
            item
            xs={12}
            isToggle={isFixed}
            toggleComponent={HeaderOption}
          />
        </Grid>
      </Container>
    </Box>
  );
}
export default memo(HeaderComponent);
