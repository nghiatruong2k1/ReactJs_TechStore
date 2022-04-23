import {memo} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function OrderTable({...props}){
  const columns = [
    "Order Status","Today","This Week","This Month","This Year","All time"
  ];
  const rows = [[
    "Pending",0,0,0,0,0
  ],[
    "Processing",0,0,0,0,0
  ],[
    "Complete",0,0,0,0,0
  ],[
    "Cancelled",0,0,0,0,0
  ]];
  return(
    <TableContainer className={styles.container}>
      <Table stickyHeader>
        <TableHead>
            <TableRow >
              {columns.map(function(column,index){
                return(
                  <TableCell
                      key={index}
                      align="center"
                      className={clsx(styles.cell,styles.title,styles.old)}
                  >
                      {column}
                  </TableCell>
                )
              })}
            </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(function(row,index){
              let isOld = (index % 2) != 0;
              return(
              <TableRow key={index}>
                {row.map(function(cell,index){
                  return(
                    <TableCell
                        key={index}
                        align="center"
                        className={clsx(styles.cell,{[styles.old]:isOld})}
                    >
                        {cell}
                    </TableCell>
                  )
                })}
              </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default memo(OrderTable);