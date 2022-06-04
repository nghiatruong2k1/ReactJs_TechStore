import {memo}         from 'react';
import {Routes,Route } from'react-router-dom';
import OrderList   from "./List/";
import { getActionName } from '../../../../../../../Config/Route/';
function CatalogOrder({...props}){
  return(
      <Routes>
        <Route path={getActionName("admin","user","index")} element={<OrderList/>} />  
      </Routes>
  )
}
export default memo(CatalogOrder);

/*

        */