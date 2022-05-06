import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import {Routes,Route } from'react-router-dom';
import CategoryList   from "./List/";
import CategoryDetail from "./Detail/";
import Add            from "../../Components/Add";
import Update         from "../../Components/Update";

import {validateRuler} from "./validate";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogCategory({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","category","index")} element={<CategoryList/>} />
        <Route path={getActionName("admin","category","add")} element={
          <Add rulers={validateRuler} controller="category">
            <CategoryDetail title="Thêm danh mục"/>
          </Add>
        }/>
        <Route path={getActionName("admin","category","update")} element={
          <Update rulers={validateRuler} controller="category">
            <CategoryDetail title="Chỉnh sửa danh mục"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogCategory);