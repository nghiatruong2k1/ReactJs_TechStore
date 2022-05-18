import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableCell,Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function CellText({display,data,childrenProps,sx,loading,text,...props}){
  return(
    <TableCell
          align="center"
          sx={{minWidth:'10em',whiteSpace:'nowrap',...sx}}
          {...props}
      >
        <Typography whiteSpace = 'nowrap' {...childrenProps}>
          {!loading ?
            (
              display && ( display.format 
              && display.format(data && data[display.key]) || data && data[display.key])
              || text || ""
            ) 
            : <Skeleton variant="text" className="skeleton" />
          }
        </Typography>
    </TableCell>
  )
}
export default memo(CellText);