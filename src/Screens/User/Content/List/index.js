import {memo,useEffect,useReducer} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import styles from './styles.module.css';

import {initData,reducer} from './init';
import Provider from "./provider";
import ViewData from "./ViewData/";

import {ViewContent} from "../../../../Components/";
function ListContent({controller,action,title,...props}){
  useEffect(function(){
    global.config.setTitleWebsite(title);
  },[title]);
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath} controller={controller} action={action}>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <ViewContent loading={false} length={state.datas.length}>
        {
          state.datas.map(function(data,index){
            return(<ViewData loading={!Boolean(data) || state.isLoading} data={data} key={index} controller={controller} />)
          })
        }
        </ViewContent>
      </Grid>
    </Provider>
  )
}
export default memo(ListContent);