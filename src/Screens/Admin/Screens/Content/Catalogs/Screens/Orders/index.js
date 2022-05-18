import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import {Routes,Route } from'react-router-dom';
import OrderList   from "./List/";
import OrderDetail from "./Detail/";
import {useAdd,useUpdate} from "../../Components/Detail/";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogOrder({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","order","index")} element={<OrderList/>} />  
        <Route path={getActionName("admin","order","add")} element={
          <OrderDetail useHandleDetail={useAdd} title="Thêm đơn hàng"/>
        }/>
        <Route path={getActionName("admin","order","update")} element={
          <OrderDetail useHandleDetail={useUpdate} title="Chỉnh sửa đơn hàng"/>
        }/>  
      </Routes>
  )
}
export default memo(CatalogOrder);

/*

        */