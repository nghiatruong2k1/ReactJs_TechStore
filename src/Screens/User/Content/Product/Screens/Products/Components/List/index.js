import {memo,useState,useEffect} from 'react';
import {Grid} from '@mui/material/';
import ListNavbar from "./Navbar";
import ListContent from "./Content";
function ListView({...props}){
  return(
    <>
        <ListNavbar xs={1} md={3} lg={2.5}/>
        <ListContent xs={11} md={9} lg={9.5}/>
    </>
  )
}
export default memo(ListView);