import {memo}         from 'react';
import clsx           from 'clsx';
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
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