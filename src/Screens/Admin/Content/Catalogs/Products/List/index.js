import {memo} from 'react';
import ListView from "../../Components/List";
import {displays} from "./init";
function ProductList({...props}){
  return(
    <>
      <ListView displays={displays} title="Quản lý sản phẩm" controller="product" />
    </>
  )
}
export default memo(ProductList);