import {memo} from 'react';
import {
  Tooltip,
  IconButton
} from '@mui/material/';
import {
  Autorenew
} from '@mui/icons-material/';


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