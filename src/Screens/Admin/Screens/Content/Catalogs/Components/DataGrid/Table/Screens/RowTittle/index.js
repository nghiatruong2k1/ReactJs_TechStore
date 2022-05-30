import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TableRow,TableCell} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DataContext} from '../../../provider';

import Cell from "../../Components/Cell/";
import AfterOption from "./AfterOption/";


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
      <Cell 
        key={0}
        title={true}
        text={""}
      />
      {
        displays.map((display,index)=>{
          return(
            <Cell 
              title={true}
              key={index+1}
              display={display}
              text={display.title}
              afterChild={<AfterOption display={display}/>}
            />
          )
        })
      }
      <Cell 
        title={true}
        key={displays.length + 1}
        text={"Tùy chọn"}
      />
    </TableRow>
  )
}
export default memo(RowTittle);