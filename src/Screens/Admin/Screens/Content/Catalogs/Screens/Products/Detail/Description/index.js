import {memo,useContext}       from 'react';
import {Stack}      from "@mui/material/";
import Accordion    from "../../../../../../../Components/Accordion/";
import InputEditter from "../../../../Components/Detail/InputEditter/";
import InputArea    from "../../../../Components/Detail/InputArea/";

import {DetailContext} from "../../../../Components/Detail/";
function ProductDes({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Mô tả" {...props}>
    <Stack spacing={1}>
      <InputArea
        left={{xs:12}}right={{xs:12}} 
        label="Mô tả ngắn"
        value={state.values && state.values["ShortDes"]} 
        onChange={(e,v)=>{handle.changeValue("ShortDes",v)}}
        valid={state.valids && state.valids["ShortDes"]}
        name="ShortDes"/>
      <InputEditter
        left={{xs:12}}right={{xs:12}} 
        label="Mô tả đầy đủ"
        value={state.values && state.values["FullDes"]}
        onChange={(e,v)=>{handle.changeValue("FullDes",v)}}
        valid={state.valids && state.valids["FullDes"]}
        name="FullDes"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductDes);