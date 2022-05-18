import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Categories  from "./Categories/";
import Brands      from "./Brands/";
import Types       from "./Types/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputText   from "../../../../Components/Detail/InputText/";
import InputSelect from "../../../../Components/Detail/InputSelect/";

import {DetailContext} from "../../../../Components/Detail/";
import {formatAlias} from "../../../../../../../../../Config/Format/";
function ProductInfo({...props}){
  const [categories] = Categories();
  const [brands] = Brands();
  const [types] = Types();
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        value={state.values && state.values["Name"]}
        valid={state.valids && state.valids["Name"]}
        onChange={(e,v)=>{
          handle.changeValue("Name",v ?? "")
          handle.changeValue("Alias",formatAlias(v ?? ""))
        }}
        valid={state.validValues && state.validValues["Name"]}
        label="Tên sản phẩm" 
        name="Name"/>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        value={state.values && state.values["Alias"]}
        valid={state.validValues && state.validValues["Alias"]}

        label="Bí danh" 
        TextFieldProps={{
          inputProps:{readOnly:true}
        }}
        name="Alias"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={categories} 
        label="Danh mục" 
        placeholder="Chọn danh mục"
        value={state.values && state.values["CategoryId"]}
        valid={state.valids && state.valids["CategoryId"]}

        onChange={(e,v)=>{
          handle.changeValue("CategoryId",v ?? 0)
        }}
        name="CategoryId"
        nameText="Name" 
        nameValue="Id"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={brands} 
        label="Thương hiệu" 
        placeholder="Chọn thương hiệu"
        value={state.values && state.values["BrandId"]}
        valid={state.valids && state.valids["BrandId"]}
        onChange={(e,v)=>{
          handle.changeValue("BrandId",v ?? 0)
        }}
        name="BrandId"
        nameText="Name" 
        nameValue="Id"/>
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={types} 
        label="Loại" 
        placeholder="Chọn loại"
        value={state.values && state.values["TypeId"]}
        valid={state.valids && state.valids["TypeId"]} 
        onChange={(e,v)=>{
          handle.changeValue("TypeId",v ?? 0)
        }}
        name="TypeId"
        nameText="Name" 
        nameValue="Id"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductInfo);