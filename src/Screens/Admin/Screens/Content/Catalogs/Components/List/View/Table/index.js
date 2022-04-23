import {memo,useContext,useEffect} from 'react';
import clsx from 'clsx';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow
} from '@mui/material/';
import styles from './styles.module.css';

import {ViewContent} from "../../../../../../../../../Components/"
import {ViewContext} from '../provider';

import RowTittle from "./RowTittle/";
import RowData from "./RowData/";
import RowEmpty from "./RowEmpty/";
function ViewTable({...props}){
  const {state} = useContext(ViewContext);
  return(
    <TableContainer className={clsx(styles.container)}>
      <Table stickyHeader className={styles.table}> 
        <TableHead>
            <RowTittle />
        </TableHead>
        <TableBody> 
          <ViewContent 
            loading={false} 
            length={state.datas.length}
            empty={<RowEmpty />}
          >
            {
              state.datas.map(function(data,index){
                  let isOld = (index % 2) != 0;
                  return(
                   <RowData isOld={isOld} loading={!Boolean(data) || state.isLoading} data={data} key={index}/>
                  )
              })
            }
          </ViewContent> 
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default memo(ViewTable);