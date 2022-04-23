import {memo}      from 'react';
import clsx        from 'clsx';
import styles      from './styles.module.css';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputText   from "../../../../Components/Detail/InputText/";
import InputLabel   from "../../../../Components/Detail/InputLabel/";
import InputNumber from "../../../../Components/Detail/InputNumber/";
import InputSwitch from "../../../../Components/Detail/InputSwitch/";
function BrandInfo({...props}){
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        label="Tên thương hiệu" 
        name="Name"/>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        label="Bí danh" 
        TextFieldProps={{
          inputProps:{readOnly:true}
        }}
        name="Alias"/>
      <InputNumber 
        left={{xs:12}}right={{xs:12}} 
        label="Thứ tự hiển thị" 
        name="OrderIndex"/>
    </Stack>
  </Accordion>
  )
}
export default memo(BrandInfo);