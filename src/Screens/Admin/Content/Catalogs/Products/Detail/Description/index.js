import {memo} from 'react';
import {Stack} from "@mui/material/";


import Accordion from "../../../Components/Accordion/";
import InputEditter from "../../../Components/Detail/InputEditter/";
import InputArea from "../../../Components/Detail/InputArea/";
function ProductDes({...props}){

  return(
  <Accordion title="Mô tả" {...props}>
    <Stack spacing={1}>
      <InputArea
        left={{xs:12}}right={{xs:12}} 
        label="Mô tả ngắn"
        defaultValue="" 
        feild="ShortDes"/>
      <InputEditter
        left={{xs:12}}right={{xs:12}} 
        label="Mô tả đầy đủ"
        defaultValue="" 
        feild="FullDes"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductDes);