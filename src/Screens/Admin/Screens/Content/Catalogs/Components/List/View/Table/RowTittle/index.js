import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableRow,TableCell} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ListContext} from '../../../provider';
function RowTittle({...props}){
  const {displays} = useContext(ListContext);
  return(
    <TableRow className={clsx(styles.head)}>
      <TableCell
          key={0}
          align="center"
          style={{whiteSpace:'nowrap'}}
          className={clsx(styles.cell)}
      >      
      </TableCell>
      {
        displays.map(({style,...display},index)=>{
          return(
            <TableCell
                key={index+1}
                align="center"
                style={{whiteSpace:'nowrap',...style}}
                className={clsx(styles.cell)}
            >
              {display.title}
            </TableCell>
          )
        })
      }
      <TableCell
          key={displays.length + 1}
          align="center"
          style={{whiteSpace:'nowrap'}}
          className={clsx(styles.cell)}
      >
        Tùy chọn
      </TableCell>
    </TableRow>
  )
}
export default memo(RowTittle);