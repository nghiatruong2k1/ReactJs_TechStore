import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputSwitch from "../../../../Components/Detail/InputSwitch/";
import {DetailContext} from "../../../../Components/Detail/";
function BrandOption({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Tùy chọn" {...props}>
    <Stack spacing={1}>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        checked={state.values && state.values["IsPopular"]}
        valid={state.valids && state.valids["IsPopular"]}
        onChange={(e,v)=>{handle.changeValue && handle.changeValue("IsPopular",v)}}
        label="Phổ biến" 
        name="IsPopular"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        checked={state.values && state.values["IsPublic"]}
        valid={state.valids && state.valids["IsPublic"]}
        onChange={(e,v)=>{handle.changeValue && handle.changeValue("IsPublic",v)}}
        label="Chế độ công khai" 
        name="IsPublic"/>
      <InputSwitch 
        left={{xs:2}}right={{xs:10}} 
        checked={state.values && state.values["IsTrash"]}
        valid={state.valids && state.valids["IsTrash"]}
        onChange={(e,v)=>{handle.changeValue && handle.changeValue("IsTrash",v)}}
        label="Xóa tạm thời" 
        name="IsTrash"/>
    </Stack>
  </Accordion>
  )
}
export default memo(BrandOption);