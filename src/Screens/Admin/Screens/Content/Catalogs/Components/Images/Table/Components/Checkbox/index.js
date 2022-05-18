import {memo,useState,useEffect} from 'react';
import clsx from 'clsx';
import {TableCell,Checkbox} from '@mui/material/';
function CellCheckbox({sx,checked,loading,onChange,onClick,...props}){
  return(
  <TableCell
      align="center"
      sx={{width:'2em',whiteSpace:'nowrap',...sx}} 
      {...props}
  >
      <Checkbox 
        checked={checked}
        onChange={(e)=>{onChange && onChange(e);}}
      />
  </TableCell>
  )
}
export default memo(CellCheckbox);