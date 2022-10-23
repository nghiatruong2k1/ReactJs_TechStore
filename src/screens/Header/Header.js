import { memo, useState, useEffect, useRef, useMemo,Fragment } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material/';
import clsx from 'clsx';
import { useMediaQuery } from '@mantine/hooks';
import { Home } from '@mui/icons-material';
import { routers } from '~/config/Router';
import {
  AuthWidget,
  LogoWidget,
  NavbarWidget,
  SearchWidget,
  CartWidget,
} from '~/screens/widgets';
import { controllers } from './init';
import HeaderOption from './component/HeaderOption';
import BottomNav from './component/BottomNav';
import styles from './Header.module.css';
const bodyRoot = document.getElementById('root');
function HeaderComponent() {
  const [isFixed, setFixed] = useState(false);
  const isMediumSize = useMediaQuery('(max-width: 850px)');
  const isSmallSize = useMediaQuery('(max-width: 600px)');
  const thisRef = useRef();
  useEffect(function () {
    const heightTop = thisRef.current.offsetHeight;
    function handleScroll(event) {
      let scrollTop = bodyRoot.scrollTop;
      if (scrollTop > 0) {
        setFixed(true);
        //thisRef.current.style.height = heightTop + 'px';
      } else {
        setFixed(false);
        //thisRef.current.style.height = 'auto';
      }
    }
    bodyRoot.addEventListener('scroll', handleScroll);
    return function () {
      bodyRoot.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const Content = useMemo(()=>{
    return (isSmallSize && BottomNav) || Fragment
  },[isSmallSize])
  return (
    <Box component="header" ref={thisRef}>
      <Container
        maxWidth="xxl"
        component={Paper}
        className={clsx(styles.container, 'popup')}
        sx={{
          zIndex: 10,
          position: { sm: (isFixed && 'fixed') || 'relative' },
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Grid container py={0.5} alignItems="center" spacing={0.5}>
          <Grid item xs={12} sm={2}>
            <LogoWidget height="3em" />
          </Grid>
          <Grid item xs />
          <SearchWidget
            component={Grid}
            item
            xs={12}
            sm={6}
            controllers={controllers}
          />
          <Content>
            {isSmallSize && (
              <HeaderOption
                icon={<Home />}
                to={routers.home.getAction()}
                text={'Trang chủ'}
              />
            )}
            <AuthWidget toggleComponent={HeaderOption} />
            <CartWidget toggleComponent={HeaderOption} />
            <NavbarWidget
              item
              xs={12}
              isToggle={isMediumSize || isFixed}
              toggleComponent={HeaderOption}
            />
          </Content>
        </Grid>
      </Container>
    </Box>
  );
}
export default memo(HeaderComponent);
