import {memo,useContext}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputImage from "../../../../Components/Detail/InputImage/";
import {DetailContext} from "../../../../Components/Detail/";
function BrandImage({...props}){
  const {state,handle} = useContext(DetailContext);
  return(
  <Accordion title="Hình ảnh" {...props}>
    <Stack spacing={1}>
      <InputImage 
        name="ImageId" 
        alt={state.values && state.values["Name"]}
        src={state.values && state.values["ImageUrl"]}
        valid={state.valids && state.valids["ImageUrl"]}
        onChange={(e,{Id,Url})=>{
          handle.changeValue && handle.changeValue("ImageId",Id);
          handle.changeValue && handle.changeValue("ImageUrl",Url);
        }}
      />
    </Stack>
  </Accordion>
  )
}
export default memo(BrandImage);