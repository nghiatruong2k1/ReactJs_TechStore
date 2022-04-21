import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Stack,Grid,Card,CardActions,Typography,CardContent,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ViewContent} from "../../../../../../Components/"
import {initData,reducer} from "./init";
import Provider from "./provider";
import OrderCard from "./Order/";
function Orders({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
    <Provider state={state} dispath={dispath}>
      <Grid container spacing={2}>
        <ViewContent loading={false}
          length={state.datas.length}
          empty={"Bạn không có đơn hàng"}
        >
          {
            state.datas.map(function(data,index){
              return(<OrderCard loading={!Boolean(data) || state.isLoading} data={data}key={index}/>)
            })
          }
        </ViewContent>
      </Grid>
    </Provider>
  )
}
export default memo(Orders);