import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';
import ProductList from "./List/";
import ProductDetail from "./Detail/";

import Add from "../Components/Add";
import Update from "../Components/Update";
function CatalogProduct({...props}){
  return(
      <Routes>
        <Route path="*" element={<ProductList />} />
        <Route path="/add/*" element={
          <Add controller="product">
            <ProductDetail title="Thêm sản phẩm"/>
          </Add>
        }/>
        <Route path="/update/:id*" element={
          <Update controller="product">
            <ProductDetail title="Cập nhật sản phẩm"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogProduct);