import {memo,useContext,useReducer,useEffect,useMemo}         from 'react';
import clsx           from 'clsx';
import {useParams} from "react-router-dom";
import {}             from '@mui/material/';
import {}             from '@mui/icons-material/';
import styles         from './styles.module.css';
import DetailProvider from "../../../Components/Detail/";
import DetailHead     from "../../../Components/Detail/Head/";
import DetailInfo     from "./Info/";
import DetailOption   from "./Option/";
import DetailImage    from "./Image/";

import {validateRuler}from "./validate";

function CategoryDetail({title,useHandleDetail,...props}){
  const detailProps = useHandleDetail({
    rulers:validateRuler,controller:"category"
  });
  return(
    <DetailProvider {...detailProps}>
     <DetailHead title={title} gridColumn="1 / span 2"/>
      <DetailInfo gridRow="2 / span 2" gridColumn="1 / 2"/>
      <DetailOption /> 
      <DetailImage /> 
    </DetailProvider>
  )
}
export default memo (CategoryDetail);