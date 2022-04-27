import {memo} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material/';
import {Visibility} from '@mui/icons-material/';
import{ NavLink }from'react-router-dom';
import styles from './styles.module.css';
function IncompleteOrderTable({...props}){
  const columns = [
    "Item","Total","Count"
  ];
  const rows = [{
    item:"Total unpaid orders (pending payment status)",
    total:100,
    view:2
  },{
    item:"Total unpaid orders (pending payment status)",
    total:100,
    view:2
  },{
    item:"Total unpaid orders (pending payment status)",
    total:100,
    view:2
  }];
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
                <TableRow key={index} className={clsx({[styles.old]:isOld})}>
                  <TableCell
                          align="center"
                          className={clsx(styles.cell)}
                      >
                      {row.item}
                  </TableCell>
                  <TableCell
                      align="center"
                      className={clsx(styles.cell)}
                  >
                      {row.total}
                  </TableCell>
                  <TableCell
                      align="center"
                      className={clsx(styles.cell)}
                  >
                    <Tooltip title="view" placement="top">
                      <Button 
                        component={NavLink} 
                        startIcon={<Visibility />} 
                        variant="outlined" to="/"
                        className={styles.view}
                      >
                          {row.view}
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default memo(IncompleteOrderTable);