import {memo} from 'react';
import Head from "../../Components/Detail/Head/";
import DetailInfo from "./Info/";
import DetailPrice from "./Price/";
import DetailDescription from "./Description/";
import DetailImage from "../../Components/Detail/SelectImage/";
function ProductDetail({title,...props}){
  return(
    <>
      <Head title={title}/>
      <DetailInfo xs={6}/>
      <DetailPrice xs={6}/>
      <DetailDescription xs={12}/>
      <DetailImage xs={12}/>
    </>
  )
}
export default memo(ProductDetail);