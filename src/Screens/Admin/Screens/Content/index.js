import {memo,useEffect} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';

import Dashboard from "./Dashboard/";

import CatalogProducts   from "./Catalogs/Screens/Products/";
import CatalogCategories from "./Catalogs/Screens/Categories/";
import CatalogBrands     from "./Catalogs/Screens/Brands/";
import CatalogOrders     from "./Catalogs/Screens/Orders/";
import CatalogUsers   from "./Catalogs/Screens/Users/";


import {getControllerName} from "../../../../Config/Route/";
function Content({...props}){
  return(
    <Container component={"main"} className={styles.main}>
      <Grid container display="grid">
        <Routes>
          <Route path={`${getControllerName("admin","dashboard")}/*`} element={<Dashboard />} />
          <Route path={`${getControllerName("admin","product")}/*`} element={<CatalogProducts />} />
          <Route path={`${getControllerName("admin","category")}/*`} element={<CatalogCategories />} />
          <Route path={`${getControllerName("admin","brand")}/*`} element={<CatalogBrands />} />
          <Route path={`${getControllerName("admin","order")}/*`} element={<CatalogOrders />} />
          <Route path={`${getControllerName("admin","user")}/*`} element={<CatalogUsers />} />
        </Routes>
      </Grid>
    </Container>
  )
}
export default memo(Content);