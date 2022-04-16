import {memo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Stack} from "@mui/material/";

import Accordion from "../../../Components/Accordion/";
import InputText from "../../../Components/Detail/InputText/";
import InputNumber from "../../../Components/Detail/InputNumber/";
import InputSwitch from "../../../Components/Detail/InputSwitch/";
function BrandInfo({...props}){
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        label="Tên thương hiệu" 
        feild="Name"/>
      <InputNumber 
        left={{xs:12}}right={{xs:12}} 
        label="Thứ tự hiển thị" 
        feild="OrderIndex"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Phổ biến" 
        feild="IsPopular"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Chế độ công khai" 
        feild="IsPublic"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Xóa tạm thời" 
        feild="IsTrash"/>
    </Stack>
  </Accordion>
  )
}
export default memo(BrandInfo);