import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {Box,Container,Grid} from '@mui/material/';
import styles from './styles.module.css';
import HeaderLogo from "./Screens/Logo/";
import HeaderSearch from "./Screens/Search/";
import HeaderLogin from "./Screens/Login/";
import HeaderCart from "./Screens/Cart/";
import HeaderProfile from "./Screens/Profile/";
import HeaderMessage from "./Screens/Message/";
import HeaderOrder from "./Screens/Order/";
import HeaderNavbar from "./Screens/Navbar/";     
function Header({...props}){
  const [isFixed,setFixed] = useState(false);
  useEffect(function(){
    document.addEventListener("scroll",function(event){
      let scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 0){
        setFixed(true)
      }else{
        setFixed(false)
      }
    })
  },[])
  return(
  <Box component="section" className={styles.section}>
    <Container maxWidth="xxl" component="header" className={styles.container}>
      <Grid container py={0.5} alignItems="center" className={clsx({[styles.fixed]:isFixed})}>
        <HeaderLogo 
          xs={isFixed && 3 || 3.5} 
          sm={isFixed && 2.5 || 3} 
          md={isFixed && 2 || 2.5} 
          lg={isFixed && 1.5 || 2}
          sx={{px:{lg:2,md:1.8,sm:1.5,xs:1.2}}}
        />
        <Grid item xs/>
        <HeaderSearch xs={1.4} lg={isFixed && 5.5 || 5}/>
        <HeaderLogin xs={1.4} lg={1}/>
        <HeaderProfile xs={1.4} lg={1}/>
        <HeaderMessage xs={1.4} lg={1}/> 
        <HeaderCart xs={1.4} lg={1}/>
        <HeaderOrder xs={1.4} lg={1}/>
        <HeaderNavbar 
          xs={1.4}
          lg={12}
          sx={{display:{lg:'block'}}}
        />
      </Grid> 
    </Container>
  </Box>
)}
export default memo(Header);

//        className={clsx({[styles.fixed]:isFixed})}