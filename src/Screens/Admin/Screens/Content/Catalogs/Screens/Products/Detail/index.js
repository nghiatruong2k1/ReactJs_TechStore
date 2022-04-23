import {memo}            from 'react';
import Head              from "../../../Components/Detail/Head/";
import DetailInfo        from "./Info/";
import DetailOption        from "./Option/";
import DetailPrice       from "./Price/";
import DetailDescription from "./Description/";
import DetailImage       from "../../../Components/Detail/SelectImage/";
function ProductDetail({title,...props}){
  return(
    <>
      <Head title={title} gridColumn="1 / span 2"/>
      <DetailInfo  gridRow="2 / span 2" />
      <DetailPrice />
      <DetailOption />
      <DetailDescription gridColumn="1 / span 2"/>
      <DetailImage gridColumn="1 / span 2"/>
    </>
  )
}
export default memo(ProductDetail);