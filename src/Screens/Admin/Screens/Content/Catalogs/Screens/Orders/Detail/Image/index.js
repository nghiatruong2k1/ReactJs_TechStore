import {memo}      from 'react';
import {Stack}     from "@mui/material/";
import Accordion   from "../../../../../../../Components/Accordion/";
import InputImage from "../../../../Components/Detail/InputImage/";
function BrandImage({...props}){
  return(
  <Accordion title="Hình ảnh" {...props}>
    <Stack spacing={1}>
      <InputImage name="ImageId" nameSrc="ImageUrl"/>
    </Stack>
  </Accordion>
  )
}
export default memo(BrandImage);