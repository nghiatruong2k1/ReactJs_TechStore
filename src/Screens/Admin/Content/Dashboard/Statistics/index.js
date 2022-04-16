import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material/';
import {
  BarChart,Add,Remove
} from '@mui/icons-material/';



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
    <Grid item {...props}>
      <Accordion 
        disableGutters 
        defaultExpanded
        className={styles.container} 
        expanded={isOpen}
      >
        <AccordionSummary className={styles.sumary}>
            <Stack direction = 'row' alignItems="center" width="100%" spacing={1}>
              <BarChart className={styles.icon} />
              <Typography variant="h5" flex="1" className={styles.title} >
                  Common statistics
              </Typography>
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
          <Grid container columnSpacing={2} rowSpacing={2}>
              <OrdersCard xs={12} sm={6} lg={3} xl={4} />
              <PendingsCard xs={12} sm={6} lg={3} xl={4} />
              <RegistersCard xs={12} sm={6} lg={3} xl={4} />
              <ProductWarehouseCard xs={12} sm={6} lg={3} xl={4} />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
      
  )
}
export default memo(Statistics);