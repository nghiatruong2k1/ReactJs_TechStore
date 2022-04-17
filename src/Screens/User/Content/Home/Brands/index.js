import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {Container,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import BrandsHead from "./Head/";
import BrandsItem from "./Item/";
import BrandsDescription from "./Description/";
import {ViewContent} from "../../../../../Components/";
import {initData,reducer} from "./init";
import Provider from "./provider";
function Brands({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider state={state}dispath={dispath}>
    <Grid container my={3}>
      <BrandsHead />
      <Grid container>
        <Grid item xs={3}>
          <BrandsDescription />
        </Grid>
        <Grid item xs={9} pl={2}>
          <Grid container spacing={1}>
            <ViewContent loading = {false} length = {state.datas.length}>  
              {
                state.datas.map(function(data,index){
                  return ( 
                    <BrandsItem 
                      loading={state.isLoading} 
                      data={data} 
                      key={index}
                      xs={3}
                    />
                  )
                })
              }
            </ViewContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Provider>
  )
}
export default memo(Brands);