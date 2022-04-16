import {memo,useState,useEffect} from 'react';
import {Grid} from '@mui/material/';
import ListNavbar from "./Navbar/";
import ListContent from "./Content/";
function ListView({...props}){
  return(
    <Grid container py={1} columnSpacing={2}>
        <ListNavbar xs={2}/>
        <ListContent xs={10}/>
    </Grid>
  )
}
export default memo(ListView);