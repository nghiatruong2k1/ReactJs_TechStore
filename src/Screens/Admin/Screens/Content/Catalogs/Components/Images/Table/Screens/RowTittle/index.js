import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableRow,TableCell} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from '../../../provider';

import CellCheckbox from "../../Components/Checkbox/";
import CellText from "../../Components/Text/";


function handleCheckChange(event){
  const table = event.target.closest('.MuiAccordion-root');
  if(table){
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    rows.forEach(function(row,index){
      const check = row.querySelector("td:first-child [type='checkbox']");
      check && (check.checked !== event.target.checked) && check.click();
    });
  }
}
function RowTittle({...props}){
  const {displays} = useContext(DataContext);
  return(
    <TableRow className={clsx(styles.head)}>
      <CellText 
        key={0}
        className={clsx(styles.cell)} 
        childrenProps={{className:styles.title}}
        text={""}
      />
      {/* <CellCheckbox onChange={handleCheckChange} key={0} className={clsx(styles.cell)}/>*/}
      {
        displays.map(({style,...display},index)=>{
          return(
          <CellText 
            key={index+1} 
            style={style} 
            className={clsx(styles.cell)} 
            childrenProps={{className:styles.title}}
            text={display.title}
          />
          )
        })
      }
      <CellText 
        key={displays.length + 1}
        className={clsx(styles.cell)} 
        childrenProps={{className:styles.title}}
        text={"Tùy chọn"}
      />
    </TableRow>
  )
}
export default memo(RowTittle);