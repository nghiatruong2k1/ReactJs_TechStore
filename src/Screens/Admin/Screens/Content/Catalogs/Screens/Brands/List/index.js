import {memo}    from 'react';
import ListView  from "../../../Components/List";
import {displays}from "./init";
function List({...props}){
  return(
    <>
      <ListView displays={displays} title="Quản lý thương hiệu" controller="brand"/>
    </>
  )
}
export default memo(List);