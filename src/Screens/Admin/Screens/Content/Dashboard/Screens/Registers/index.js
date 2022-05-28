import {memo,useReducer} from 'react';
import {
  Stack
} from '@mui/material/';
import {Accordion} from "../../../../../Components/"
import OrdersChart from "./Chart/";
import OrdersButton from "./Button/";
import Provider from "./provider";
import {types,initData,reducer} from "./init";




function News({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath}>
    <Accordion 
      title="Tài khoản"
      option={
        <>{types.map(function(item,index){
            return(
              <OrdersButton key={index} active={index == state.inType} index={index}>{item.text}</OrdersButton>
            )
        })}</>
      }
      {...props}
    >
      <Stack spacing={3}>
        <OrdersChart />
      </Stack>
    </Accordion>
  </Provider>   
  )
}
export default memo(News);