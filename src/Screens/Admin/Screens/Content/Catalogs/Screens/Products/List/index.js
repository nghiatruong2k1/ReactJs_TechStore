import {memo} from 'react';
import ListView from "../../../Components/List";
import {displays} from "./init";
function ProductList({...props}){
  return(
    <ListView 
      title="Quản lý sản phẩm"
      displays={displays} 
      controller="product" 
    />
  )
}
export default memo(ProductList);