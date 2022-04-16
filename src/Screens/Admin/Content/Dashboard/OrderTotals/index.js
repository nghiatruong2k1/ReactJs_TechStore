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
  Payment,Autorenew,Add,Remove
} from '@mui/icons-material/';

import styles from './styles.module.css';

import OrderTable from "./Table/";
function News({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
    <Grid item {...props}>
      <Accordion disableGutters 
        defaultExpanded
        className={styles.container} 
        expanded={isOpen}
      >
        <AccordionSummary className={styles.sumary}>
            <Stack direction = 'row' alignItems="center" width="100%" spacing={1}>
              <Payment className={styles.icon} />
              <Typography variant="h5" flex="1" className={styles.title} >
                  Order totals
              </Typography>
              <Tooltip title="Sync" placement="top">
                <IconButton>
                  <Autorenew />
                </IconButton>
              </Tooltip>
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
          <OrderTable />
        </AccordionDetails>
      </Accordion>
    </Grid>
      
  )
}
export default memo(News);