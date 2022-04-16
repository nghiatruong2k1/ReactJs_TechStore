import {memo} from 'react';
import clsx from 'clsx';
import {
  Grid
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import CatalogProducts from "./Products/";
import CatalogCategories from "./Categories/";
import CatalogBrands from "./Brands/";
import CatalogImages from "./Images/";
import{Routes,Route }from'react-router-dom';

function Catalogs({...props}){
  return(
    <Grid container columnSpacing={2} rowSpacing={1}>
      <Routes>
        <Route path="/product/*" element={<CatalogProducts />} />
        <Route path="/category/*" element={<CatalogCategories />} />
        <Route path="/brand/*" element={<CatalogBrands />} />
        <Route path="/image/*" element={<CatalogImages />} />
      </Routes>
    </Grid>
  )
}
export default memo(Catalogs);