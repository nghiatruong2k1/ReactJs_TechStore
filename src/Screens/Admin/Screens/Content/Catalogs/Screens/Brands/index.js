import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import{Routes,Route } from 'react-router-dom';
import BrandList      from "./List/";
import BrandDetail    from "./Detail/";
import Add            from "../../Components/Add";
import Update         from "../../Components/Update";
import {validateRuler}from "./validate";
function CatalogBrand({...props}){
  const {getActionName} = global.config.useRoute();
  return(
      <Routes>
        <Route path={getActionName("admin","brand","index")} element={<BrandList/>} />
        <Route path={getActionName("admin","brand","add")} element={
          <Add rulers={validateRuler} controller="brand">
            <BrandDetail title="Thêm thương hiệu"/>
          </Add>
        }/>
        <Route path={getActionName("admin","brand","update")+"/:id"} element={
          <Update rulers={validateRuler} controller="brand">
            <BrandDetail title="Chỉnh sửa thương hiệu"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogBrand);