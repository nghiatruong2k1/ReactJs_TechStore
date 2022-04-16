import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import{Routes,Route }from'react-router-dom';
import CategoryList from "./List/";
import CategoryDetail from "./Detail/";
import Add from "../Components/Add";
import Update from "../Components/Update";
function CatalogCategory({...props}){
  return(
      <Routes>
        <Route path="/*" element={<CategoryList/>} />
        <Route path="/add/*" element={
          <Add  controller="category">
            <CategoryDetail title="Thêm danh mục"/>
          </Add>
        }/>
        <Route path="/update/:id*" element={
          <Update controller="category">
            <CategoryDetail title="Chỉnh sửa danh mục"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogCategory);