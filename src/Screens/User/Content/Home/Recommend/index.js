import {memo,useReducer} from 'react';
import {Grid} from '@mui/material/';
import styles from './styles.module.css';

import {initData,reducer} from './init';
import Provider from "./provider";

import {ViewContent} from "../../../../../Components/";
import RecommendHead from "./Head/";
import RecommendProduct from "./Product/";
function Recommend({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Grid container className={styles.content} my={3}>
        <RecommendHead />
        <Grid container spacing={1}>
          <ViewContent loading = {false} length = {state.datas.length}>  
            {
              state.datas.map(function(data,index){
                return ( <RecommendProduct loading={state.isLoading || !Boolean(data)} data={data} key={index}/>)
              })
            }
          </ViewContent>
        </Grid> 
      </Grid>
    </Provider>
  )
}
export default memo(Recommend);