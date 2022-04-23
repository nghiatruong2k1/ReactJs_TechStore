import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  Button,
  IconButton,
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

import {LatestOrdersContext} from '../provider';
function LatestOrderTable({...props}){
  const {data,page,view} = useContext(LatestOrdersContext);
  const indexOffset = (page.get - 1) * view.get;
  const indexLimit = page.get * view.get;
  return(
    <TableContainer className={styles.container}>
      <Table stickyHeader>
        <TableHead>
            <TableRow >
              {data.titles.map(function(column,index){
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
            data.values.slice(indexOffset,indexLimit).map(function(row,index){
              let isOld = (index % 2) != 0;
              return(
                <TableRow key={index} className={clsx({[styles.old]:isOld})}>
                  <TableCell
                      align="center"
                      className={clsx(styles.cell)}
                  >
                      {index}
                  </TableCell>
                  <TableCell
                          align="center"
                          className={clsx(styles.cell)}
                      >
                      {row.status}
                  </TableCell>
                  <TableCell
                      align="center"
                      className={clsx(styles.cell)}
                  >
                      {row.customer}
                  </TableCell>
                  <TableCell
                      align="center"
                      className={clsx(styles.cell)}
                  >
                      {row.created}
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
                          view
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
export default memo(LatestOrderTable);