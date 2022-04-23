import {memo}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputSwitch from "../../../../Components/Detail/InputSwitch/";
function BrandOption({...props}){
  return(
  <Accordion title="Tùy chọn" {...props}>
    <Stack spacing={1}>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Phổ biến" 
        name="IsPopular"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Chế độ công khai" 
        name="IsPublic"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        label="Xóa tạm thời" 
        name="IsTrash"/>
    </Stack>
  </Accordion>
  )
}
export default memo(BrandOption);