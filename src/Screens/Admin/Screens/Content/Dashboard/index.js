import {memo}          from 'react';
import clsx            from 'clsx';
import {Grid}          from '@mui/material/';
import {}              from '@mui/icons-material/';
import styles          from './styles.module.css';

import Title           from "../../../Components/Title/";

import News             from "./Screens/News/";
import Statistics       from "./Screens/Statistics/";
import Orders           from "./Screens/Orders/";
import Registers        from "./Screens/Registers/";
import IncompleteOrders from "./Screens/IncompleteOrders/";
import SearchKeywords   from "./Screens/SearchKeywords/";
function Dashboard({...props}){
  return(
    <>
      <Title text="Dashboard" gridColumn="1 / span 2"/>
      <News gridColumn="1 / span 2"/>
      <Statistics gridColumn="1 / span 2"/>
      <Orders gridColumn="1 / span 2"/>
      <Registers gridColumn="1 / span 2"/>
      {/* <IncompleteOrders gridColumn="1 / 2"/>
      <SearchKeywords gridColumn="2 / 3" /> */}
    </>
  )
}
export default memo(Dashboard);