import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import DetailHead from "../../../Components/Detail/Head/";
import DetailInfo from "./Info/";
import DetailOption from "./Option/";
import DetailImage from "../../../Components/Detail/SelectImage/";
function CategoryDetail({title,...props}){
  return(
    <>
      <DetailHead title={title} gridColumn="1 / span 2"/>
      <DetailInfo />
      <DetailOption />
      <DetailImage gridColumn="1 / span 2"/>
    </>
  )
}
export default memo (CategoryDetail);