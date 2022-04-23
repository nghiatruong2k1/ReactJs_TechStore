import {memo}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputNumber from "../../../../Components/Detail/InputNumber/";
function ProductPrice({...props}){

  return(
  <Accordion title="Giá" {...props}>
    <Stack spacing={1}>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá gốc"
        defaultValue="0" 
        name="Price"/>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá khuyến mãi"
        defaultValue="0" 
        name="SalePrice"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductPrice);