import {memo} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import Title from "../Title/";

import News from "./News/";
import Statistics from "./Statistics/";
import Orders from "./Orders/";
import Registers from "./Registers/";
import OrderTotals from "./OrderTotals/";
import IncompleteOrders from "./IncompleteOrders/";
import LatestOrders from "./LatestOrders/";
import SearchKeywords from "./SearchKeywords/";
function Dashboard({...props}){

  return(
    <Grid container columnSpacing={2} rowSpacing={1}>
      <Title text="Dashboard"/>
      <News xs={12}/>
      <Statistics xs={12}/>
      <Orders xs={12} md={6}/>
      <Registers xs={12} md={6}/>
      <OrderTotals xs={12}/>
      <LatestOrders xs={12}/>
      <IncompleteOrders xs={12} md={6}/>
      <SearchKeywords xs={12} md={6} />
    </Grid>
  )
}
export default memo(Dashboard);