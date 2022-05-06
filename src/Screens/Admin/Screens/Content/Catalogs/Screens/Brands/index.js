import {memo}         from 'react';
import{Routes,Route } from 'react-router-dom';
import BrandList      from "./List/";
import BrandDetail    from "./Detail/";
import Add            from "../../Components/Add";
import Update         from "../../Components/Update";
import {validateRuler}from "./validate";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogBrand({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","brand","index")} element={<BrandList/>} />
        <Route path={getActionName("admin","brand","add")} element={
          <Add rulers={validateRuler} controller="brand">
            <BrandDetail title="Thêm thương hiệu"/>
          </Add>
        }/>
        <Route path={getActionName("admin","brand","update")} element={
          <Update rulers={validateRuler} controller="brand">
            <BrandDetail title="Chỉnh sửa thương hiệu"/>
          </Update>
        }/>
      </Routes>
  )
}
export default memo(CatalogBrand);