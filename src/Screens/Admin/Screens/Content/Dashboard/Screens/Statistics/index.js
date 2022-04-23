import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  IconButton
} from '@mui/material/';
import {
  BarChart,Add,Remove
} from '@mui/icons-material/';


import {Accordion} from "../../../../../Components/"

import OrdersCard from "./Orders/";
import ProductWarehouseCard from "./ProductWarehouse/";
import PendingsCard from "./Pendings/";
import RegistersCard from "./Registers/";
import styles from './styles.module.css';
function Statistics({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
      <Accordion 
        title="Common statistics"
        {...props}
      >
        <Grid container columnSpacing={2} rowSpacing={2}>
              <OrdersCard xs={12} sm={6} lg={3} xl={4} />
              <PendingsCard xs={12} sm={6} lg={3} xl={4} />
              <RegistersCard xs={12} sm={6} lg={3} xl={4} />
              <ProductWarehouseCard xs={12} sm={6} lg={3} xl={4} />
          </Grid>
      </Accordion>    
  )
}
export default memo(Statistics);