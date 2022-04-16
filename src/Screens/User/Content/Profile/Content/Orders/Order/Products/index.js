import {memo,useReducer,useContext} from 'react';
import clsx from 'clsx';
import {Stack,List,ListItem} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ViewContent} from "../../../../../../../../Components/"
import {OrderContext} from "../provider";
import {initData,reducer} from "./init";
import Provider from "./provider";
import ViewItem from "./Item";
function Products({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const {data} = useContext(OrderContext);
  return(
  <Provider state={state} dispath={dispath} orderId = {data.Id}>
    <Stack>
      <List disablePadding>     
          <ViewContent loading={state.isLoading} length={state.datas.length}>
          {
            state.datas.map(function(data,index){
              return(
                <ViewItem data={data} key={index}/>
              )
            })
          }
          </ViewContent>
      </List>
    </Stack>
  </Provider>
  )
}
export default memo(Products);