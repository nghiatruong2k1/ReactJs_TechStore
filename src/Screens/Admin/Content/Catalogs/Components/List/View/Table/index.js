import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow
} from '@mui/material/';
import styles from './styles.module.css';

import {ViewContext} from '../provider';

import RowTittle from "./RowTittle/";
import RowData from "./RowData/";
import RowEmpty from "./RowEmpty/";
function ViewTable({...props}){
  const {state,titles} = useContext(ViewContext);

  return(
    <TableContainer className={clsx(styles.container)}>
      <Table stickyHeader className={styles.table}> 
        <TableHead>
            <RowTittle />
        </TableHead>
        <TableBody>   
          {state.isLoading  && <RowData />
            || (
            (state.total > 0) 
            && state.datas.map(function(data,index){
                  let isOld = (index % 2) != 0;
                  return(
                   <RowData isOld={isOld} data={data} key={index}/>
                  )
              })
            || <RowEmpty />
            )
              
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default memo(ViewTable);