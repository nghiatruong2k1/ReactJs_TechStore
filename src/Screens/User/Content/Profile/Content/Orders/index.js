import {memo,useReducer} from 'react';
import {Grid} from '@mui/material/';
import {ViewContent} from "../../../../../../Components/"
import {initData,reducer} from "./init";
import Provider from "./provider";
import OrderCard from "./Order/";
import Paging from "./Paging/";
import Step from "./Step/";
function Orders({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Step />
      <Grid container spacing={2}>
        <ViewContent 
          loading={state.isLoading}
          length={state.datas.length}
          empty={"Bạn không có đơn hàng"}
        >
          {
            state.datas.map(function(data,index){
              return(<OrderCard status={state.statusIndex} loading={!Boolean(data) || state.isLoading} data={data}key={index}/>)
            })
          }
        </ViewContent>
      </Grid>
      <Paging />
    </Provider>
  )
}
export default memo(Orders);