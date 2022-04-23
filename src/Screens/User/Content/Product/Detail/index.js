import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";
import DetailPicture from "./Picture/";
import DetailInfo from "./Info/";
import DetailDescription from "./Description/";

import {ViewContent} from "../../../../../Components/";
function ProductDetail({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath}>
    <ViewContent loading={false} empty="Không tìm thấy sản phẩm" length={state.data}>
      <Grid container py={2} className={styles.top}>
        <DetailPicture xs={5} px={2} py={1}/>
        <DetailInfo xs={7} px={2} py={1}/>
      </Grid>
      <Grid container py={2}>
        <DetailDescription xs={8} px={2} py={1}/>
      </Grid>
    </ViewContent>
  </Provider>
  )
}
export default memo(ProductDetail);