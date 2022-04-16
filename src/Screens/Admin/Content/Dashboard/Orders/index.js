import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  Button,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material/';
import {
  ShoppingCart,Add,Remove
} from '@mui/icons-material/';

import styles from './styles.module.css';

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
    <Grid item {...props}>
      <Accordion disableGutters 
        defaultExpanded
        className={styles.container} 
        expanded={isOpen}
      >
        <AccordionSummary className={styles.sumary}>
            <Stack direction = 'row' alignItems="center" width="100%" spacing={1}>
              <ShoppingCart className={styles.icon} />
              <Typography variant="h5" flex="1" className={styles.title} >
                 Orders
              </Typography>
              {isOpen &&
                (<>
                  <OrdersButton tooltip="Year" type={0}>Year</OrdersButton>
                  <OrdersButton tooltip="Month" type={1}>Month</OrdersButton>
                  <OrdersButton tooltip="Week" type={2}>Week</OrdersButton>
                </>)
              }
              <Tooltip title={isOpen && "Close" ||  "Open"} placement="top">
                <IconButton 
                    onClick={toggleOpen}>
                    {isOpen && <Remove /> ||  <Add />}
                </IconButton>
              </Tooltip>
            </Stack>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Stack spacing={3}>
              <OrdersChart />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Grid>
  </Provider>   
  )
}
export default memo(News);