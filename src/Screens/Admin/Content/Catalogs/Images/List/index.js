import {memo} from 'react';
import ListView from "../../Components/List/";
import {displays} from "./init";
function ImageList({...props}){
  return(
    <>
      <ListView displays={displays} title="Quản lý hình ảnh" controller="image"/>
    </>
  )
}
export default memo(ImageList);