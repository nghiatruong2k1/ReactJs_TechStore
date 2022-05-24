import {memo}           from 'react';
import clsx             from 'clsx';
import {}               from '@mui/material/';
import {}               from '@mui/icons-material/';
import styles           from './styles.module.css';
import{Routes,Route }   from'react-router-dom';
import ProductList      from "./List/";
import ProductDetail    from "./Detail/";
import {useAdd,useUpdate} from "../../Components/Detail/";
import {useAddImages,useUpdateImages} from "./Detail/Images/";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogProduct({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","product","index")} element={<ProductList />} />
        <Route path={getActionName("admin","product","add")} element={
          <ProductDetail useHandleImage={useAddImages} useHandleDetail={useAdd} title="Thêm sản phẩm"/>
        }/>
        <Route path={getActionName("admin","product","update")} element={
          <ProductDetail useHandleImage={useUpdateImages} useHandleDetail={useUpdate} title="Chỉnh sửa sản phẩm"/>
        }/>
      </Routes>
  )
}
export default memo(CatalogProduct);