import {memo}         from 'react';
import {Grid}             from '@mui/material/';
import DetailProvider from "../../../Components/Detail/";
import DetailHead     from "../../../Components/Detail/Head/";
import DetailInfo     from "./Info/";
import DetailOption   from "./Option/";
function OrderDetail({title,useHandleDetail,...props}){
  const detailProps = useHandleDetail({
    rulers:{},controller:"order"
  });
  return(
    <DetailProvider {...detailProps}>
      <DetailHead title={title} gridColumn="1 / span 2"/>
      <DetailInfo />
      <DetailOption />
    </DetailProvider>
  )
}
export default memo (OrderDetail);