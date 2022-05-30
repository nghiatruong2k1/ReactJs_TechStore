import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputSwitch from "../../../../Components/Detail/InputSwitch/";
import InputSelect from "../../../../Components/Detail/InputSelect/";
import {DetailContext} from "../../../../Components/Detail/";


import useGetStatus from "./Status/";
function OrderOption({...props}){
  const {state,handle} = useContext(DetailContext);
  const [status] = useGetStatus();
  return(
  <Accordion title="Tùy chọn" {...props}>
    <Stack spacing={1}>
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
      <InputSelect 
        left={{xs:12}}right={{xs:12}} 
        values={status} 
        label="Trạng thái" 
        placeholder="Chọn trạng thái"
        disabledEmpty
        value={state.values && state.values["StatusId"]}
        valid={state.valids && state.valids["StatusId"]}

        onChange={(e,v)=>{
          handle.changeValue("StatusId",v ?? 0)
        }}
        name="StatusId"
        nameText="Name" 
        nameValue="Id"/>
    </Stack>
  </Accordion>
  )
}
export default memo(OrderOption);