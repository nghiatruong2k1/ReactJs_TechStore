import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import DetailHead from "../../Components/Detail/Head/";
import DetailInfo from "./Info/";
import DetailImage from "../../Components/Detail/SelectImage/";
function BrandDetail({title,...props}){
  return(
    <>
      <DetailHead title={title}/>
      <DetailInfo xs={7}/>
      <DetailImage xs={12}/>
    </>
  )
}
export default memo (BrandDetail);