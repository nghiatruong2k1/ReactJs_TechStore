import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody
} from '@mui/material/';
import styles from './styles.module.css';

import {ViewContent} from "../../../../../../../../Components/"
import {DataContext} from '../provider';

import RowTittle from "./Screens/RowTittle/";
import RowData from "./Screens/RowData/";
import RowEmpty from "./Screens/RowEmpty/";
function ViewTable({...props}){
  const {state} = useContext(DataContext);
  return(
    <TableContainer className={clsx(styles.container)}>
      <Table stickyHeader className={styles.table}> 
        <TableHead>
          <RowTittle />
        </TableHead>
        <TableBody> 
          <ViewContent 
            loading={state.isLoading} 
            length={state.datas && state.datas.length || 0}
            empty={<RowEmpty />}
          >
            {
              Array.isArray(state.datas) 
              && state.datas.map(function(data,index){
                  let isOld = (index % 2) != 0;
                  return(
                   <RowData old={isOld} loading={!Boolean(data) || state.isLoading} data={data} key={index}/>
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