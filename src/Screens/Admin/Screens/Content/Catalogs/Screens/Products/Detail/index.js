import {memo,useReducer,useContext,useEffect,useMemo}            from 'react';
import DetailProvider    from "../../../Components/Detail/";
import Head              from "../../../Components/Detail/Head/";
import DetailInfo        from "./Info/";
import DetailOption      from "./Option/";
import DetailPrice       from "./Price/";
import DetailDescription from "./Description/";
import DetailImages       from "./Images/";
import {validateProduct}from "./validate";

function ProductDetail({title,useHandleDetail,useHandleImage,...props}){


  const detailProps = useHandleDetail({
    rulers:validateProduct,controller:"product"
  });

  return(
    <DetailProvider {...detailProps}>
      
      <Head title={title} gridColumn="1 / span 2"/>
      <DetailInfo gridRow="2 / span 2" />
      <DetailPrice />
      <DetailOption />
      <DetailDescription gridColumn="1 / span 2"/>
      <DetailImages useHandleImage={useHandleImage} gridColumn="1 / span 2"/>
      
    </DetailProvider>
  )
}
export default memo(ProductDetail);

//