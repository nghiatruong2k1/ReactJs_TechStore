import {memo}           from 'react';
import clsx             from 'clsx';
import {}               from '@mui/material/';
import {}               from '@mui/icons-material/';
import styles           from './styles.module.css';
import{Routes,Route }   from'react-router-dom';
import ProductList      from "./List/";
import ProductDetail    from "./Detail/";

import Add              from "../../Components/Add";
import Update           from "../../Components/Update";
import {validateRuler}from "./validate";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogProduct({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","product","index")} element={<ProductList />} />
        <Route path={getActionName("admin","product","add")} element={
          <Add rulers={validateRuler} controller="product">
            <ProductDetail title="Thêm sản phẩm"/>
          </Add>
        }/>
        <Route path={getActionName("admin","product","update")} element={
          <Update rulers={validateRuler} controller="product">
            <ProductDetail title="Cập nhật sản phẩm"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogProduct);