import {memo}      from 'react';
import {Stack}     from "@mui/material/";
import Categories  from "./Categories/";
import Brands      from "./Brands/";
import Types       from "./Types/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputText   from "../../../../Components/Detail/InputText/";
import InputSelect from "../../../../Components/Detail/InputSelect/";
function ProductInfo({...props}){
  const [categories] = Categories();
  const [brands] = Brands();
  const [types] = Types();
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        label="Tên sản phẩm" 
        name="Name"/>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        label="Bí danh" 
        TextFieldProps={{
          inputProps:{readOnly:true}
        }}
        name="Alias"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={categories} 
        label="Danh mục" 
        placeholder="--Chọn danh mục--"
        name="CategoryId"
        feildText="Name" 
        feildValue="Id"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={brands} 
        label="Thương hiệu" 
        placeholder="--Chọn thương hiệu--"
        name="BrandId"
        feildText="Name" 
        feildValue="Id"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={types} 
        label="Loại" 
        placeholder="--Chọn loại--"
        name="TypeId"
        feildText="Name" 
        feildValue="Id"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductInfo);