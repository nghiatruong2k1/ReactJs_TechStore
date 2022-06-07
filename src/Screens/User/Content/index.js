import {memo} from 'react';
import {Box,Container} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import {Routes,Route} from "react-router-dom";


import HomeContent from "./Home/";


import ListGet from "./List/Screens/ListGet/";
import ListSearch from "./List/Screens/ListSearch/";

import ProductDetail from "./Product/Screens/Detail/";
import {ProductsSearch,ProductsGet} from "./Product/Screens/Products/";

import CartContent from "./Cart/";
import ProfileContent from "./Profile/";

import {getRouteName,getControllerName} from "../../../Config/Route/";

const useStyles = makeStyles((theme)=>{
  return {
    section:{
      color:`${theme.palette.text.default} !important`,
      backgroundColor:`${theme.palette.background.default} !important`
    }
  }}
);

function Content({...props}){
  const styles = useStyles();
  return(
    <Box component="main" className={styles.section} py={2} >
      <Container maxWidth="xxl" sx={{px:{xs:0,sm:1}}}>
        <Routes>
          <Route path="*" element={<HomeContent title=""/>} />

          <Route path={`${getRouteName("user","category","index")}`} 
            element={<ListGet controller="category" title="danh mục"/>} />
          <Route path={`${getRouteName("user","category","search")}`} 
            element={<ListSearch param={"query"} controller="category"/>} />

          <Route path={`${getRouteName("user","brand","index")}`} 
            element={<ListGet controller="brand" title="thương hiệu" />} />
          <Route path={`${getRouteName("user","brand","search")}`} 
            element={<ListSearch param={"query"} controller="brand"/>} />
          
          <Route path={`${getControllerName("user","cart")}/*`} 
            element={<CartContent />} />

          <Route path={`${getControllerName("user","profile")}/*`} 
            element={<ProfileContent />} />


          <Route path={`${getRouteName("user","product","detail")}`}
 	            element={<ProductDetail />} />  
          <Route path={`${getRouteName("user","product","search")}`}
 	            element={<ProductsSearch />} /> 
          <Route path={`${getRouteName("user","product","brand")}`}
 	            element={<ProductsGet action={"brand"} />} />
          <Route path={`${getRouteName("user","product","category")}`}
 	            element={<ProductsGet action={"category"} />} />  
        </Routes>
      </Container>
    </Box>
  )
}
export default memo(Content);