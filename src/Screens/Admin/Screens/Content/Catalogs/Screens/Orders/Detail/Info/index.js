import {memo,useContext}      from 'react';
import clsx        from 'clsx';
import styles      from './styles.module.css';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputText   from "../../../../Components/Detail/InputText/";
import InputLabel   from "../../../../Components/Detail/InputLabel/";
import InputNumber from "../../../../Components/Detail/InputNumber/";
import {DetailContext} from "../../../../Components/Detail/";
function OrderInfo({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputLabel 
        left={{xs:4}}right={{xs:8}} 
        label="Mã đơn hàng" 
        value={state.values && state.values["Id"]}
        name="Id"/>
      <InputLabel 
        left={{xs:4}}right={{xs:8}} 
        label="Email"
        value={state.values && state.values["Email"]}
        name="Email"/>
      <InputLabel 
        left={{xs:4}}right={{xs:8}} 
        label="Họ"
        value={state.values && state.values["FirstName"]} 
        name="FirstName"/>
      <InputLabel 
        left={{xs:4}}right={{xs:8}} 
        label="Tên" 
        value={state.values && state.values["LastName"]}
        name="LastName"/>
      <InputLabel 
        left={{xs:4}}right={{xs:8}} 
        label="Địa chỉ" 
        value={state.values && state.values["Location"]}
        name="Location"/>
    </Stack>
  </Accordion>
  )
}
export default memo(OrderInfo);