import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableCell,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {RowDataContext} from '../provider';
function CellText({display,...props}){
  const {data} = useContext(RowDataContext);
  return(
    <TableCell
          align="center"
          style={{minWidth:'10em'}}
          {...props}
      >
      {data ?
        (
          display && display.format 
          && display.format(data[display.key]) || data[display.key]
        ) 
        : <Skeleton variant="text" width="100%" />}
    </TableCell>
  )
}
export default memo(CellText);