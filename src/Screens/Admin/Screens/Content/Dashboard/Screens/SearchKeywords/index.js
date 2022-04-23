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
  Search,Autorenew,Add,Remove
} from '@mui/icons-material/';

import styles from './styles.module.css';
import {Accordion} from "../../../../../Components/"
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
    <Accordion 
        title="Search Keywords"
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
      >
      <OrderTable />
      <OrderPaging />
    </Accordion>
  </Provider>  
  )
}
export default memo(SearchKeywords);