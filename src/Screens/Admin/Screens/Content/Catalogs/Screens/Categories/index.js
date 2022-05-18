import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import {Routes,Route } from'react-router-dom';
import CategoryList   from "./List/";
import CategoryDetail from "./Detail/";
import {useAdd,useUpdate} from "../../Components/Detail/";

import { getActionName } from '../../../../../../../Config/Route/';
function CatalogCategory({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","category","index")} element={<CategoryList/>} />
        <Route path={getActionName("admin","category","add")} element={
          <CategoryDetail useHandleDetail={useAdd} title="Thêm danh mục" />
        }/>
        <Route path={getActionName("admin","category","update")} element={
          <CategoryDetail useHandleDetail={useUpdate} title="Chỉnh sửa danh mục" />
        }/>
      </Routes>
  )
}
export default memo(CatalogCategory);