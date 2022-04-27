import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  TableRow
} from '@mui/material/';
import styles from './styles.module.css';



import {ListContext} from '../../../provider';
import Provider from "./provider";

import CellCheckbox from "./Checkbox/";
import CellImage from "./Image/";
import CellText from "./Text/";
import CellOption from "./Option/";
function RowData({data,loading,isOld,...props}){
  const {displays} = useContext(ListContext);
  return(
    <Provider data={data} loading={loading}>
      <TableRow className={clsx({[styles.old]:isOld})}>
        <CellCheckbox key={0} className={clsx(styles.cell)}/>
        {
          displays.map(({type,style,...display},index)=>{
            let Cell = CellText;
            switch (type) {
              case 'image':
                Cell = CellImage;
                break;
              case 'checkbox':
                Cell = CellCheckbox;
                break;
            }
            return <Cell style={style} className={clsx(styles.cell)} display={display} key={index + 1}/>
          })
        }
        <CellOption key={displays.length + 1} className={clsx(styles.cell)} />
      </TableRow>
    </Provider>
  )
}
export default memo(RowData);