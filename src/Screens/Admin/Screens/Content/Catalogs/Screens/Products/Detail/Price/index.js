import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputNumber from "../../../../Components/Detail/InputNumber/";
import {DetailContext} from "../../../../Components/Detail/";

function ProductPrice({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Giá" {...props}>
    <Stack spacing={1}>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá gốc"
        value={state.values && state.values["Price"]}
        valid={state.valids && state.valids["Price"]}
        onChange={(e,v)=>{handle.changeValue("Price",!Number.isNaN(v) && v || "")}}
        name="Price"/>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá khuyến mãi"
        value={state.values && state.values["SalePrice"]}
        valid={state.valids && state.valids["SalePrice"]}
        onChange={(e,v)=>{handle.changeValue("SalePrice",!Number.isNaN(v) && v || "")}}
        name="SalePrice"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductPrice);