import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import {Routes,Route } from'react-router-dom';
import BrandList   from "./List/";
import BrandDetail from "./Detail/";
import {useAdd,useUpdate} from "../../Components/Detail/";

import { getActionName } from '../../../../../../../Config/Route/';
function CatalogBrand({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","brand","index")} element={<BrandList/>} />
        <Route path={getActionName("admin","brand","add")} element={
          <BrandDetail useHandleDetail={useAdd} title="Thêm thương hiệu" />
        }/>
        <Route path={getActionName("admin","brand","update")} element={
          <BrandDetail useHandleDetail={useUpdate} title="Chỉnh sửa thương hiệu" />
        }/>
      </Routes>
  )
}
export default memo(CatalogBrand);