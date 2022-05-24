import {memo} from 'react';
import {Box,Container} from '@mui/material/';
import styles from './styles.module.css';

import {Routes,Route} from "react-router-dom";


import HomeContent from "./Home/";


import ListContent from "./List/";

import ProductContent from "./Product/";
import CartContent from "./Cart/";
import ProfileContent from "./Profile/";




import {getRouteName,getControllerName} from "../../../Config/Route/";

function Content({...props}){
  return(
    <Box component="section" className={styles.section}  mt={3} >
      <Container maxWidth="xxl" component="main"className={styles.main}>
        <Routes>
          <Route path="*" element={<HomeContent />} />

          <Route path={`${getRouteName("user","category","index")}`} 
            element={<ListContent controller="category"/>} />
          <Route path={`${getRouteName("user","category","search")}`} 
            element={<ListContent action="search" controller="category"/>} />

          <Route path={`${getRouteName("user","brand","index")}`} 
            element={<ListContent controller="brand" />} />
          <Route path={`${getRouteName("user","brand","search")}`} 
            element={<ListContent action="search" controller="brand"/>} />
          
          <Route path={`${getControllerName("user","cart")}/*`} 
            element={<CartContent />} />

          <Route path={`${getControllerName("user","product")}/*`} 
            element={<ProductContent />} />

          <Route path={`${getControllerName("user","profile")}/*`} 
            element={<ProfileContent />} />

        </Routes>
      </Container>
    </Box>
  )
}
export default memo(Content);