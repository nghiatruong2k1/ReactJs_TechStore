import {memo,useReducer} from 'react';
import {Box,Grid,Divider} from '@mui/material/';
import styles from './styles.module.css';

import {initData,reducer} from './init';
import Provider from "./provider";

import {ViewContent} from "../../../../../Components/";
import RecommendProduct from "./Product/";
function Recommend({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Box my={3}>
        <Divider textAlign="left" component="h3" className={styles.title}>
          Sản phẩm đề xuất:
        </Divider>
        <Grid container spacing={1}>
          <ViewContent loading = {false} length = {state.datas.length}>  
            {
              state.datas.map(function(data,index){
                return ( <RecommendProduct loading={state.isLoading || !Boolean(data)} data={data} key={index}/>)
              })
            }
          </ViewContent>
        </Grid> 
      </Box>
    </Provider>
  )
}
export default memo(Recommend);