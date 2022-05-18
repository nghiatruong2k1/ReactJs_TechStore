import {memo} from 'react';
import ListView  from "../../../Components/List";
import {displays} from "./init";
function OrdersList({...props}){
  return(
    <>
      <ListView displays={displays} title="Quản lý đơn hàng" controller="order"/>
    </>
  )
}
export default memo(OrdersList);