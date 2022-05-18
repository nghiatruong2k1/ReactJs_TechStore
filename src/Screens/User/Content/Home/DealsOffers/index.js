import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Box,
  Grid,
  Stack,
  Divider,
  Typography
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ViewContent} from "../../../../../Components/";


import {initData,reducer} from './init';
import Provider from "./provider";
import TimerContent from "./Timer/";
import ProductContent from "./Product/";
function DealsOffers({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state} dispath={dispath}>
    <Grid container className={styles.content} my={3}>
      <Grid item xs={12} lg={3}>
        <Stack p={3}>
          <Typography component="h4">Sản phẩm khuyến mãi</Typography>
          <Typography pb={1}></Typography>
          <TimerContent />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={9}>
      <Box>
        <Stack direction="row" sx={{overflowY:'hidden'}}>
            <ViewContent loading = {false} length = {state.datas.length}>  
            {
              state.datas.map(function(data,index){
                return ( <ProductContent loading={state.isLoading || !Boolean(data)} data={data} key={index}/>)
              })
            }
            </ViewContent>
        </Stack>    
      </Box>
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(DealsOffers);