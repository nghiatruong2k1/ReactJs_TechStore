import {memo} from 'react';
import ListView from "../../Components/List";
import {displays} from "./init";
function CategoryList({...props}){
  return(
    <>
      <ListView displays={displays} title="Quản lý danh mục" controller="category"/>
    </>
  )
}
export default memo(CategoryList);