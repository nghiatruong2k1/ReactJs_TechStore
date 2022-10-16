import {memo,useReducer} from 'react';
import {
  Stack
} from '@mui/material/';
import { AccorCard } from '~/components';
import Provider from "./provider";
import {initState,reducerState} from "./init";
import TypeButtons from './TypeButtons';
import ContentChart from './Chart'
function ChartChartOrders({...props}){
  const [state,dispath] = useReducer(reducerState,initState);
  return(
  <Provider state={state} dispath={dispath}>
    <AccorCard 
      title="Thống kê đặt hàng"
      option={<TypeButtons />}
      open={true}
      {...props}
    >
      <Stack spacing={3}>
      <ContentChart datas={state.data} status={state.status} inType={state.inType}/>
      </Stack>
    </AccorCard>
  </Provider>   
  )
}
export default memo(ChartChartOrders);