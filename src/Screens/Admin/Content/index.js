import {memo,useEffect} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';

import Dashboard from "./Dashboard/";

import CatalogProducts from "./Catalogs/Products/";
import CatalogCategories from "./Catalogs/Categories/";
import CatalogBrands from "./Catalogs/Brands/";
import CatalogImages from "./Catalogs/Images/";
function Content({...props}){
  const {getControllerName} = global.config.useRoute();
  return(
    <Container component="main" className={styles.main}>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Routes>
          <Route path={`${getControllerName("admin","product")}/*`} element={<CatalogProducts />} />
          <Route path={`${getControllerName("admin","category")}/*`} element={<CatalogCategories />} />
          <Route path={`${getControllerName("admin","brand")}/*`} element={<CatalogBrands />} />
          <Route path={`${getControllerName("admin","image")}/*`} element={<CatalogImages />} />
        </Routes>
      </Grid>
    </Container>
  )
}
export default memo(Content);