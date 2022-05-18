import {memo,useContext,forwardRef} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  IconButton,
  SvgIcon
} from '@mui/material/';
import {
  DeleteSweep,
  AddCircleOutlineRounded
} from '@mui/icons-material/';

import ColumnButton from "./Screens/Column/";
import ExportButton from "./Screens/Export/";
import ImportButton from "./Screens/Import/";
import TrashButton from "./Screens/Trash/";
import RefetchButton from "./Screens/Refetch/";
import RemoveButton from "./Screens/Remove/";
import AddButton from "./Screens/Add/";

export function handleAllClick(event,target){
  const table = event.target.closest('.MuiAccordion-root');
  if(table){
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    rows.forEach(function(row,index){
      const check = row.querySelector("td [type='checkbox']");
      if(check && check.checked){
        const btn =  row.querySelector(`td ${target}`);
        btn && btn.click();  
      }
    });
  }
}
function Option({...props}){
  return(
    <>
      <AddButton/>
      <TrashButton />
      <RemoveButton />
      <RefetchButton />
      <ImportButton />
      <ExportButton />
      <ColumnButton />
    </>
  )
}
export default memo(Option);