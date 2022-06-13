import {memo,useReducer} from 'react';
import {Grid} from '@mui/material/';

import {initData,reducer} from "./init";
import Provider from "./provider";
import DetailPicture from "./Picture/";
import DetailInfo from "./Info/";
import DetailDescription from "./Description/";
import {ViewContent} from "../../../../../../Components/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    content:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    }
  }}
);


function ProductDetail({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const styles = useStyles();
  return(
  <Provider state={state} dispath={dispath}>
    <ViewContent loading={state.isLoading} empty="Không tìm thấy sản phẩm" length={state.data.Id}>
      <Grid container py={1} >
        <DetailPicture xs={12} sm={5} md={4} px={1} py={1}/>
        <DetailInfo xs={12} sm={7} md={8} px={1} py={1}/>
      </Grid>
      <Grid container py={1} >
        <DetailDescription loading={state.isLoading} fullDes={state.data.FullDes} xs={12} px={1} py={1}/>
      </Grid>
    </ViewContent>
  </Provider>
  )
}
export default memo(ProductDetail);