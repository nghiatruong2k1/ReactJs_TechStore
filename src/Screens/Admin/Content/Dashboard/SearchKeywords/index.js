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
  Search,Autorenew,Add,Remove
} from '@mui/icons-material/';

import styles from './styles.module.css';

import OrderTable from "./Table/";
import OrderPaging from "./Paging/";

import Provider from "./provider";
function SearchKeywords({...props}){
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
              <Search className={styles.icon} />
              <Typography variant="h5" flex="1" className={styles.title} >
                  Search Keywords
              </Typography>
              <Tooltip title="View All" placement="top">
                <Button variant="contained" className={styles.button}>
                  View All
                </Button>
              </Tooltip>
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
          <OrderPaging />
        </AccordionDetails>
      </Accordion>
    </Grid>
  </Provider>  
  )
}
export default memo(SearchKeywords);