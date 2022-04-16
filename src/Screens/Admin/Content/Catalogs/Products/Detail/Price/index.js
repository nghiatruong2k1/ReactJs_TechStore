import {memo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Stack} from "@mui/material/";


import Accordion from "../../../Components/Accordion/";
import InputText from "../../../Components/Detail/InputText/";
import InputNumber from "../../../Components/Detail/InputNumber/";
import InputSwitch from "../../../Components/Detail/InputSwitch/";
import InputSelect from "../../../Components/Detail/InputSelect/";
function ProductPrice({...props}){

  return(
  <Accordion title="Giá" {...props}>
    <Stack spacing={1}>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá gốc"
        defaultValue="0" 
        feild="Price"/>
      <InputNumber
        left={{xs:12}}right={{xs:12}} 
        label="Giá khuyến mãi"
        defaultValue="0" 
        feild="SalePrice"/>
    </Stack>
  </Accordion>
  )
}
export default memo(ProductPrice);