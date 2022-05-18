import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Box,Grid,Divider} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import BrandsItem from "./Item/";
import BrandsDescription from "./Description/";
import {ViewContent} from "../../../../../Components/";
import {initData,reducer} from "./init";
import Provider from "./provider";
function Brands({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state}dispath={dispath}>
    <Box my={3}>
      <Divider textAlign="left" component="h3" className={styles.title}>
          Thương hiêụ:
      </Divider>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} lg={3}>
          <BrandsDescription />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Grid container spacing={1}>
            <ViewContent loading = {state.isLoading} length = {state.datas.length}>  
              {
                state.datas.map(function(data,index){
                  return ( 
                    <BrandsItem 
                      loading={state.isLoading || !Boolean(data)} 
                      data={data} 
                      key={index}
                      xs={6} sm={4} md={3}
                    />
                  )
                })
              }
            </ViewContent>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Provider>
  )
}
export default memo(Brands);