import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  Button,
  IconButton
} from '@mui/material/';
import {
  Autorenew
} from '@mui/icons-material/';

import styles from './styles.module.css';

import OrderTable from "./Table/";
import OrderPaging from "./Paging/";
import {Accordion} from "../../../../../Components/"
import Provider from "./provider";
function News({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
  <Provider>
    <Accordion 
      title="Latest Orders"
      option={(
        <>
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
        </>
      )}
      {...props}
    >
      <OrderTable />
      <OrderPaging />
    </Accordion>
  </Provider>  
  )
}
export default memo(News);