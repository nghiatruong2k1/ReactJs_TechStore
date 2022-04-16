import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';
import BrandList from "./List/";
import BrandDetail from "./Detail/";
import Add from "../Components/Add";
import Update from "../Components/Update";
function CatalogBrand({...props}){
  return(
      <Routes>
        <Route path="/*" element={<BrandList/>} />
        <Route path="/add/*" element={
          <Add  controller="brand">
            <BrandDetail title="Thêm thương hiệu"/>
          </Add>
        }/>
        <Route path="/update/:id*" element={
          <Update controller="brand">
            <BrandDetail title="Chỉnh sửa thương hiệu"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogBrand);