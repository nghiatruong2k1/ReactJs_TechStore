import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  IconButton
} from '@mui/material/';
import {
  Autorenew
} from '@mui/icons-material/';

import styles from './styles.module.css';

import {Accordion} from "../../../../../Components/"
import OrderTable from "./Table/";
function News({...props}){
  return(
    <Accordion 
      title="Incomplete Orders"
      option={(
        <Tooltip title="Sync" placement="top">
          <IconButton>
            <Autorenew />
          </IconButton>
        </Tooltip>
      )}
      {...props}
    >
      <OrderTable />
    </Accordion>
  )
}
export default memo(News);