import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  Button,
  IconButton
} from '@mui/material/';
import {
  PersonAddAlt
} from '@mui/icons-material/';

import styles from './styles.module.css';
import {Accordion} from "../../../../../Components/"
import OrdersChart from "./Chart/";
import OrdersButton from "./Button/";
import Provider from "./provider";
function News({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
  <Provider>
      <Accordion 
        title="Registers"
        option={(
            <>
              <OrdersButton tooltip="Year" type={0}>Year</OrdersButton>
              <OrdersButton tooltip="Month" type={1}>Month</OrdersButton>
              <OrdersButton tooltip="Week" type={2}>Week</OrdersButton>
            </>
        )}
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