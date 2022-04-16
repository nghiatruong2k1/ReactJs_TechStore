import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {Box,Container,Grid} from '@mui/material/';
import styles from './styles.module.css';
import HeaderLogo from "./Logo/";
import HeaderSearch from "./Search/";
import HeaderOption from "./Option/";

import HeaderNavbar from "./Navbar/";
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
        <Grid container className={clsx({[styles.fixed]:isFixed})} alignItems="center" columnSpacing={2} rowSpacing={2}>
            <HeaderLogo xs={5} lg={2} pr={isFixed == true ? 6 : 1}/>
            <HeaderSearch xs={12} lg={5}/>
            <HeaderOption xs={12} lg={5}/>
        </Grid> 
        <Grid container alignItems="center" columnSpacing={2}>
            <HeaderNavbar xs={12}/>
        </Grid> 
    </Container>
  </Box>
)}
export default memo(Header);