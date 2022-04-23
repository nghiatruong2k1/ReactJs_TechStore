import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableCell,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {RowDataContext} from '../provider';
function CellText({display,...props}){
  const {data,loading} = useContext(RowDataContext);
  return(
    <TableCell
          align="center"
          style={{minWidth:'10em'}}
          {...props}
      >
      {!loading ?
        (
          display && display.format 
          && display.format(data && data[display.key]) || data && data[display.key]
        ) 
        : <Skeleton variant="text" className="skeleton" />
      }
    </TableCell>
  )
}
export default memo(CellText);