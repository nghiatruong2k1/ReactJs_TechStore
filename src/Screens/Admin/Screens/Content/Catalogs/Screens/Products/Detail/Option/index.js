import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputSwitch from "../../../../Components/Detail/InputSwitch/";
import {DetailContext} from "../../../../Components/Detail/";
function ProductOption({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Tùy chọn" {...props}>
    <Stack spacing={1}>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        checked={state.product && state.product["IsPublic"]}
        valid={state.validProduct && state.validProduct["IsPublic"]}
        onChange={(e,v)=>{
          handle.changeProduct("IsPublic",v ?? "")
        }}
        label="Chế độ công khai" 
        name="IsPublic"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        checked={state.product && state.product["IsTrash"]}
        valid={state.validProduct && state.validProduct["IsTrash"]}
        onChange={(e,v)=>{
          handle.changeProduct("IsTrash",v ?? "")
        }}
        label="Xóa tạm thời" 
        name="IsTrash"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductOption);