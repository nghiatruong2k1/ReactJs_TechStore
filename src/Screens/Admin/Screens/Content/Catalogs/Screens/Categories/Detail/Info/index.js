import {memo,useContext}      from 'react';
import clsx        from 'clsx';
import styles      from './styles.module.css';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputText   from "../../../../Components/Detail/InputText/";
import InputLabel   from "../../../../Components/Detail/InputLabel/";
import InputNumber from "../../../../Components/Detail/InputNumber/";
import {DetailContext} from "../../../../Components/Detail/";
import {formatAlias} from "../../../../../../../../../Config/Format/";
function CategoryInfo({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Thông tin" {...props}>
    <Stack spacing={1}>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        value={state.values && state.values["Name"]}
        valid={state.valids && state.valids["Name"]}
        onChange={(e,v)=>{   
          handle.changeValue && handle.changeValue("Name",v);
          handle.changeValue && handle.changeValue("Alias",formatAlias(v));
        }}
        label="Tên danh mục" 
        name="Name"/>
      <InputText 
        left={{xs:12}}right={{xs:12}} 
        value={state.values && state.values["Alias"]}
        label="Bí danh" 
        TextFieldProps={{
          inputProps:{readOnly:true}
        }}
        name="Alias"/>
    </Stack>
  </Accordion>
  )
}
export default memo(CategoryInfo);